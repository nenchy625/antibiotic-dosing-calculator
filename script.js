// 抗菌薬データベース
const antibiotics = {
    // ペニシリン系抗菌薬
    penicillin_g: {
        name: "ペニシリンG (PCG)",
        standardDose: 2000, // 万単位/日（1600-2400万単位）
        singleDose: 400, // 万単位/回
        unit: "万単位",
        renalAdjustment: [
            { ccr: 90, dose: 400, interval: 4 }, // q4-6h（4時間を採用）
            { ccr: 50, dose: 400, interval: 6 },
            { ccr: 30, dose: 400, interval: 8 },
            { ccr: 10, dose: 400, interval: 8 },
            { ccr: 0, dose: 400, interval: 12 }
        ]
    },
    ampicillin: {
        name: "アンピシリン (ABPC)",
        standardDose: 6000, // mg/日（4-8g）
        singleDose: 1000, // mg/回
        renalAdjustment: [
            { ccr: 90, dose: 1000, interval: 6 },
            { ccr: 50, dose: 1000, interval: 6 },
            { ccr: 30, dose: 1000, interval: 8 },
            { ccr: 10, dose: 1000, interval: 12 },
            { ccr: 0, dose: 1000, interval: 12 }
        ]
    },
    ampicillin_sulbactam: {
        name: "アンピシリン/スルバクタム (SBT/ABPC)",
        standardDose: 9000, // mg/日（6-12g）
        singleDose: 1500, // mg/回
        renalAdjustment: [
            { ccr: 90, dose: 1500, interval: 6 },
            { ccr: 50, dose: 1500, interval: 6 },
            { ccr: 30, dose: 1500, interval: 8 },
            { ccr: 10, dose: 1500, interval: 12 },
            { ccr: 0, dose: 1500, interval: 24 }
        ]
    },
    piperacillin: {
        name: "ピペラシリン (PIPC)",
        standardDose: 14000, // mg/日（12-16g）
        singleDose: 3000, // mg/回
        renalAdjustment: [
            { ccr: 90, dose: 3000, interval: 6 },
            { ccr: 50, dose: 3000, interval: 6 },
            { ccr: 30, dose: 3000, interval: 6 },
            { ccr: 10, dose: 2000, interval: 6 },
            { ccr: 0, dose: 2000, interval: 8 }
        ]
    },
    piperacillin_tazobactam: {
        name: "ピペラシリン/タゾバクタム (PIPC/TAZ)",
        standardDose: 18000, // mg/日
        singleDose: 4500, // mg/回
        renalAdjustment: [
            { ccr: 90, dose: 4500, interval: 6 },
            { ccr: 50, dose: 4500, interval: 6 },
            { ccr: 30, dose: 4500, interval: 8 },
            { ccr: 10, dose: 2250, interval: 6 },
            { ccr: 0, dose: 2250, interval: 8 }
        ]
    },
    
    // セファロスポリン系抗菌薬
    cefazolin: {
        name: "セファゾリン (CEZ)",
        standardDose: 4000, // mg/日（4-6g）
        singleDose: 1000, // mg/回
        renalAdjustment: [
            { ccr: 90, dose: 1000, interval: 6 }, // 1g q6h or 2g q8h（1g q6hを採用）
            { ccr: 50, dose: 1000, interval: 8 },
            { ccr: 30, dose: 1000, interval: 12 },
            { ccr: 10, dose: 1000, interval: 24 },
            { ccr: 0, dose: 1000, interval: 24 }
        ]
    },
    cefotiam: {
        name: "セフォチアム (CTM)",
        standardDose: 4000, // mg/日
        singleDose: 1000, // mg/回
        renalAdjustment: [
            { ccr: 90, dose: 1000, interval: 6 },
            { ccr: 50, dose: 1000, interval: 6 },
            { ccr: 30, dose: 1000, interval: 8 },
            { ccr: 10, dose: 1000, interval: 12 },
            { ccr: 0, dose: 1000, interval: 24 }
        ]
    },
    cefmetazole: {
        name: "セフメタゾール (CMZ)",
        standardDose: 4000, // mg/日
        singleDose: 1000, // mg/回
        renalAdjustment: [
            { ccr: 90, dose: 1000, interval: 6 },
            { ccr: 50, dose: 1000, interval: 6 },
            { ccr: 30, dose: 1000, interval: 8 },
            { ccr: 10, dose: 1000, interval: 12 },
            { ccr: 0, dose: 1000, interval: 24 }
        ]
    },
    cefotaxime: {
        name: "セフォタキシム (CTX)",
        standardDose: 3500, // mg/日（3-4g）
        singleDose: 1000, // mg/回
        renalAdjustment: [
            { ccr: 90, dose: 1000, interval: 6 },
            { ccr: 50, dose: 1000, interval: 8 },
            { ccr: 30, dose: 1000, interval: 8 },
            { ccr: 10, dose: 1000, interval: 12 },
            { ccr: 0, dose: 1000, interval: 24 }
        ]
    },
    ceftriaxone: {
        name: "セフトリアキソン (CTRX)",
        standardDose: 1500, // mg/日（1-2g）
        singleDose: 1500, // mg/回
        noRenalAdjustment: true,
        renalAdjustment: [
            { ccr: 0, dose: 1500, interval: 24 }
        ]
    },
    ceftazidime: {
        name: "セフタジジム (CAZ)",
        standardDose: 3500, // mg/日（3-4g）
        singleDose: 1000, // mg/回
        renalAdjustment: [
            { ccr: 90, dose: 1000, interval: 6 },
            { ccr: 50, dose: 1000, interval: 8 },
            { ccr: 30, dose: 1000, interval: 12 },
            { ccr: 10, dose: 1000, interval: 24 },
            { ccr: 0, dose: 1000, interval: 24 }
        ]
    },
    cefepime: {
        name: "セフェピム (CFPM)",
        standardDose: 4000, // mg/日
        singleDose: 2000, // mg/回
        renalAdjustment: [
            { ccr: 90, dose: 2000, interval: 12 },
            { ccr: 50, dose: 2000, interval: 12 },
            { ccr: 30, dose: 2000, interval: 24 },
            { ccr: 10, dose: 1000, interval: 24 },
            { ccr: 0, dose: 1000, interval: 24 }
        ]
    },
    aztreonam: {
        name: "アズトレオナム (AZT)",
        standardDose: 3500, // mg/日（3-4g）
        singleDose: 1000, // mg/回
        renalAdjustment: [
            { ccr: 90, dose: 1000, interval: 6 },
            { ccr: 50, dose: 1000, interval: 6 },
            { ccr: 30, dose: 1000, interval: 8 },
            { ccr: 10, dose: 1000, interval: 12 },
            { ccr: 0, dose: 2000, interval: 24 }
        ]
    },
    
    // カルバペネム系抗菌薬
    imipenem: {
        name: "イミペネム (IPM/CS)",
        standardDose: 2000, // mg/日
        singleDose: 500, // mg/回
        renalAdjustment: [
            { ccr: 90, dose: 500, interval: 6 },
            { ccr: 50, dose: 500, interval: 6 },
            { ccr: 30, dose: 500, interval: 8 },
            { ccr: 10, dose: 500, interval: 12 },
            { ccr: 0, dose: 500, interval: 12 }
        ]
    },
    meropenem: {
        name: "メロペネム (MEPM)",
        standardDose: 3000, // mg/日
        singleDose: 1000, // mg/回
        renalAdjustment: [
            { ccr: 90, dose: 1000, interval: 8 },
            { ccr: 50, dose: 1000, interval: 8 },
            { ccr: 30, dose: 1000, interval: 12 },
            { ccr: 10, dose: 500, interval: 12 },
            { ccr: 0, dose: 500, interval: 24 }
        ]
    },
    
    // アミノグリコシド系
    gentamicin: {
        name: "ゲンタマイシン (GM)",
        standardDose: 5, // mg/kg/日
        weightBased: true,
        tdm: true,
        renalAdjustment: [
            { ccr: 90, dose: 5, interval: 24 },
            { ccr: 50, dose: 4, interval: 24 },
            { ccr: 30, dose: 4, interval: 48 },
            { ccr: 10, dose: 0, interval: 0, consultation: true },
            { ccr: 0, dose: 0, interval: 0, consultation: true }
        ]
    },
    tobramycin: {
        name: "トブラマイシン (TOB)",
        standardDose: 5, // mg/kg/日
        weightBased: true,
        tdm: true,
        renalAdjustment: [
            { ccr: 90, dose: 5, interval: 24 },
            { ccr: 50, dose: 4, interval: 24 },
            { ccr: 30, dose: 4, interval: 48 },
            { ccr: 10, dose: 0, interval: 0, consultation: true },
            { ccr: 0, dose: 0, interval: 0, consultation: true }
        ]
    },
    
    // 抗MRSA薬
    vancomycin: {
        name: "バンコマイシン (VCM)",
        standardDose: 2000, // mg/日
        weightBased: true,
        initialDose: true,
        tdm: true,
        renalAdjustment: [
            { ccr: 90, initialDose: 25, maintenanceDose: 17.5, interval: 12 }, // 初回20-30mg/kg, 維持15-20mg/kg q12h
            { ccr: 50, initialDose: 25, maintenanceDose: 13.5, interval: 12 }, // 初回20-30mg/kg, 維持12-15mg/kg q12h
            { ccr: 30, initialDose: 25, maintenanceDose: 13.5, interval: 12 }, // 初回20-30mg/kg, 維持12-15mg/kg q12h
            { ccr: 10, initialDose: 20, maintenanceDose: 8.75, interval: 24 }, // 初回20mg/kg, 維持7.5-10mg/kg q24h
            { ccr: 0, initialDose: 20, maintenanceDose: 8.75, interval: 48 } // 初回20mg/kg, 維持7.5-10mg/kg q48h
        ]
    },
    daptomycin: {
        name: "ダプトマイシン (DAP)",
        standardDose: 6, // mg/kg/日
        weightBased: true,
        renalAdjustment: [
            { ccr: 90, dose: 6, interval: 24 },
            { ccr: 50, dose: 6, interval: 24 },
            { ccr: 30, dose: 6, interval: 24 },
            { ccr: 10, dose: 6, interval: 48 },
            { ccr: 0, dose: 6, interval: 48 }
        ]
    },
    linezolid: {
        name: "リネゾリド (LZD)",
        standardDose: 1200, // mg/日
        singleDose: 600, // mg/回
        noRenalAdjustment: true,
        renalAdjustment: [
            { ccr: 0, dose: 600, interval: 12 }
        ]
    },
    
    // その他の抗菌薬
    clindamycin: {
        name: "クリンダマイシン (CLDM)",
        standardDose: 2100, // mg/日（1800-2400mg）
        singleDose: 600, // mg/回
        noRenalAdjustment: true,
        renalAdjustment: [
            { ccr: 0, dose: 600, interval: 8 }
        ]
    },
    minocycline: {
        name: "ミノサイクリン (MINO)",
        standardDose: 200, // mg/日
        singleDose: 100, // mg/回
        noRenalAdjustment: true,
        renalAdjustment: [
            { ccr: 0, dose: 100, interval: 12 }
        ]
    },
    ciprofloxacin: {
        name: "シプロフロキサシン (CPFX)",
        standardDose: 800, // mg/日
        singleDose: 400, // mg/回
        renalAdjustment: [
            { ccr: 90, dose: 400, interval: 12 },
            { ccr: 50, dose: 400, interval: 12 },
            { ccr: 30, dose: 400, interval: 12 },
            { ccr: 10, dose: 400, interval: 24 },
            { ccr: 0, dose: 400, interval: 24 }
        ]
    },
    erythromycin: {
        name: "エリスロマイシン (EM)",
        standardDose: 1125, // mg/日（750-1500mg）
        singleDose: 375, // mg/回
        noRenalAdjustment: true,
        renalAdjustment: [
            { ccr: 0, dose: 375, interval: 8 }
        ]
    },
    azithromycin: {
        name: "アジスロマイシン (AZM)",
        standardDose: 500, // mg/日
        singleDose: 500, // mg/回
        noRenalAdjustment: true,
        renalAdjustment: [
            { ccr: 0, dose: 500, interval: 24 }
        ]
    },
    trimethoprim_sulfamethoxazole: {
        name: "ST合剤 (TMP/SMX)",
        standardDose: 7.5, // mg/kg/日 (trimethoprim換算)
        singleDose: 3, // mg/kg/回
        weightBased: true,
        renalAdjustment: [
            { ccr: 90, dose: 3, interval: 8 },
            { ccr: 50, dose: 3, interval: 8 },
            { ccr: 30, dose: 3, interval: 8 },
            { ccr: 10, dose: 3, interval: 12 },
            { ccr: 0, dose: 0, interval: 0, consultation: true }
        ]
    },
    metronidazole: {
        name: "メトロニダゾール (MNZ)",
        standardDose: 1500, // mg/日
        singleDose: 7.5, // mg/kg/回
        weightBased: true,
        renalAdjustment: [
            { ccr: 90, dose: 7.5, interval: 8 },
            { ccr: 50, dose: 7.5, interval: 8 },
            { ccr: 30, dose: 7.5, interval: 8 },
            { ccr: 10, dose: 7.5, interval: 8 },
            { ccr: 0, dose: 7.5, interval: 12 }
        ]
    },
    
    // 抗真菌薬
    micafungin: {
        name: "ミカファンギン (MCFG)",
        standardDose: 100, // mg/日
        singleDose: 100, // mg/回
        noRenalAdjustment: true,
        renalAdjustment: [
            { ccr: 0, dose: 100, interval: 24 }
        ]
    },
    fluconazole: {
        name: "フルコナゾール (FLCZ)",
        standardDose: 250, // mg/日（100-400mg）
        singleDose: 250, // mg/回
        renalAdjustment: [
            { ccr: 90, dose: 250, interval: 24 }, // 100-400mg q24h（中央値250mg採用）
            { ccr: 50, dose: 250, interval: 24 }, // 100-400mg q24h
            { ccr: 30, dose: 125, interval: 24 }, // 50-200mg q24h（中央値125mg採用）
            { ccr: 10, dose: 125, interval: 24 }, // 50-200mg q24h
            { ccr: 0, dose: 125, interval: 24 } // 50-200mg q24h
        ]
    },
    voriconazole: {
        name: "ボリコナゾール (VRCZ)",
        standardDose: 8, // mg/kg/日
        singleDose: 4, // mg/kg/回
        weightBased: true,
        initialDose: true,
        renalAdjustment: [
            { ccr: 90, initialDose: 6, maintenanceDose: 4, interval: 12 },
            { ccr: 50, initialDose: 6, maintenanceDose: 4, interval: 12 },
            { ccr: 30, dose: 0, interval: 0, oralRecommended: true },
            { ccr: 10, dose: 0, interval: 0, oralRecommended: true },
            { ccr: 0, dose: 0, interval: 0, oralRecommended: true }
        ]
    },
    
    // 抗ウイルス薬
    acyclovir: {
        name: "アシクロビル (ACV)",
        standardDose: 750, // mg/日
        singleDose: 7.5, // mg/kg/回
        weightBased: true,
        renalAdjustment: [
            { ccr: 90, dose: 7.5, interval: 8 },
            { ccr: 50, dose: 7.5, interval: 8 },
            { ccr: 30, dose: 7.5, interval: 12 },
            { ccr: 10, dose: 7.5, interval: 24 },
            { ccr: 0, dose: 3.75, interval: 24 }
        ]
    },
    ganciclovir: {
        name: "ガンシクロビル (GCV)",
        standardDose: 10, // mg/kg/日
        singleDose: 5, // mg/kg/回
        weightBased: true,
        renalAdjustment: [
            { ccr: 90, dose: 5, interval: 12 },
            { ccr: 50, dose: 5, interval: 12 },
            { ccr: 30, dose: 2.5, interval: 24 },
            { ccr: 10, dose: 1.25, interval: 24 },
            { ccr: 0, dose: 1.25, interval: 168 }
        ]
    }
};

// Cockcroft-Gault式によるクレアチニンクリアランス計算
function calculateCCR(age, weight, creatinine, isMale) {
    const genderFactor = isMale ? 1 : 0.85;
    return Math.round(((140 - age) * weight * genderFactor) / (72 * creatinine));
}

// 腎機能に基づく投与量調整
function adjustDoseForRenal(ccr, renalAdjustment, weight = null, antibiotic = null) {
    let adjustmentData = null;
    
    // CCRに応じた投与データを決定
    for (let i = 0; i < renalAdjustment.length; i++) {
        if (ccr >= renalAdjustment[i].ccr) {
            adjustmentData = renalAdjustment[i];
            break;
        }
    }
    
    if (!adjustmentData) {
        adjustmentData = renalAdjustment[renalAdjustment.length - 1];
    }
    
    let result = {
        dose: adjustmentData.dose || 0,
        interval: adjustmentData.interval || 24,
        consultation: adjustmentData.consultation || false,
        oralRecommended: adjustmentData.oralRecommended || false,
        initialDose: adjustmentData.initialDose || null,
        maintenanceDose: adjustmentData.maintenanceDose || null
    };
    
    // 体重ベースの薬剤の場合、体重を掛ける
    if (weight && antibiotic && antibiotic.weightBased) {
        if (result.dose > 0) {
            result.dose = Math.round(result.dose * weight);
        }
        if (result.initialDose) {
            result.initialDose = Math.round(result.initialDose * weight);
        }
        if (result.maintenanceDose) {
            result.maintenanceDose = Math.round(result.maintenanceDose * weight);
        }
    }
    
    return result;
}

// 参考用腎機能段階別投与量一覧表を生成
function generateReferenceTable(antibiotic, weight) {
    const unit = antibiotic.unit || 'mg';
    let tableHTML = `
        <div style="margin: 20px 0; padding: 15px; background-color: #f8f9fa; border-radius: 8px; border: 1px solid #dee2e6;">
            <h4 style="margin-top: 0; color: #495057;">参考：腎機能段階別投与量一覧</h4>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <thead>
                    <tr style="background-color: #e9ecef;">
                        <th style="border: 1px solid #dee2e6; padding: 8px; text-align: left;">CCR (mL/min)</th>
                        <th style="border: 1px solid #dee2e6; padding: 8px; text-align: left;">投与量</th>
                        <th style="border: 1px solid #dee2e6; padding: 8px; text-align: left;">投与間隔</th>
                        <th style="border: 1px solid #dee2e6; padding: 8px; text-align: left;">備考</th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    // CCR段階の定義
    const ccrRanges = [
        { range: '>90', ccr: 90 },
        { range: '90-50', ccr: 50 },
        { range: '49-30', ccr: 30 },
        { range: '29-10', ccr: 10 },
        { range: '<10', ccr: 0 }
    ];
    
    ccrRanges.forEach(ccrData => {
        const adjustmentData = adjustDoseForRenal(ccrData.ccr, antibiotic.renalAdjustment, weight, antibiotic);
        
        let doseDisplay = '';
        let remarkDisplay = '';
        
        if (adjustmentData.consultation) {
            doseDisplay = 'コンサルト';
            remarkDisplay = '専門医相談';
        } else if (adjustmentData.oralRecommended) {
            doseDisplay = '内服推奨';
            remarkDisplay = '静注より内服薬推奨';
        } else if (antibiotic.initialDose && adjustmentData.initialDose && adjustmentData.maintenanceDose) {
            doseDisplay = `初回: ${adjustmentData.initialDose}${unit}<br>維持: ${adjustmentData.maintenanceDose}${unit}`;
        } else {
            doseDisplay = `${adjustmentData.dose}${unit}`;
        }
        
        // 腎機能調整不要の薬剤
        if (antibiotic.noRenalAdjustment) {
            remarkDisplay = '腎機能調整不要';
        }
        
        // TDM推奨薬剤
        if (antibiotic.tdm && !adjustmentData.consultation) {
            remarkDisplay += (remarkDisplay ? ', ' : '') + 'TDM推奨';
        }
        
        tableHTML += `
            <tr>
                <td style="border: 1px solid #dee2e6; padding: 8px;">${ccrData.range}</td>
                <td style="border: 1px solid #dee2e6; padding: 8px;">${doseDisplay}</td>
                <td style="border: 1px solid #dee2e6; padding: 8px;">${adjustmentData.interval > 0 ? adjustmentData.interval + '時間毎' : '-'}</td>
                <td style="border: 1px solid #dee2e6; padding: 8px;">${remarkDisplay || '-'}</td>
            </tr>
        `;
    });
    
    tableHTML += `
                </tbody>
            </table>
        </div>
    `;
    
    return tableHTML;
}

// 投与量計算メイン関数
function calculateDose() {
    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const gender = document.getElementById('gender').value;
    const creatinine = parseFloat(document.getElementById('creatinine').value);
    const antibioticKey = document.getElementById('antibiotic').value;
    
    // 入力値の検証
    if (!age || !weight || !gender || !creatinine || !antibioticKey) {
        showResult('すべての項目を入力してください。', 'error');
        return;
    }
    
    if (creatinine < 0.1 || creatinine > 20) {
        showResult('クレアチニン値が範囲外です (0.1-20 mg/dL)。', 'error');
        return;
    }
    
    const antibiotic = antibiotics[antibioticKey];
    const isMale = gender === 'male';
    
    // CCR計算
    const ccr = calculateCCR(age, weight, creatinine, isMale);
    
    // 腎機能調整後の投与量計算
    const adjustmentResult = adjustDoseForRenal(ccr, antibiotic.renalAdjustment, weight, antibiotic);
    
    // 単位の設定
    const unit = antibiotic.unit || 'mg';
    
    // 結果の表示
    let resultHTML = `
        <h3>${antibiotic.name}</h3>
        <p><strong>クレアチニンクリアランス:</strong> ${ccr} mL/min</p>
    `;
    
    // 参考用腎機能段階別投与量一覧表を追加
    resultHTML += generateReferenceTable(antibiotic, weight);
    
    // 推奨投与量の表示
    resultHTML += `<div style="background-color: #e8f5e8; border-left: 4px solid #27ae60; padding: 15px; margin: 15px 0;">`;
    
    // コンサルテーション必要な場合
    if (adjustmentResult.consultation) {
        resultHTML += `
                <p style="color: #e65100; font-weight: bold; margin: 0;">⚠️ 専門医コンサルテーション必要</p>
                <p style="margin: 5px 0 0 0;">重度腎機能障害のため、感染症内科または腎臓内科への相談を推奨します。</p>
        `;
        resultHTML += `</div>`;
        showResult(resultHTML, 'warning');
        return;
    }
    
    // 内服薬推奨の場合
    if (adjustmentResult.oralRecommended) {
        resultHTML += `
                <p style="color: #e65100; font-weight: bold; margin: 0;">⚠️ 内服薬推奨</p>
                <p style="margin: 5px 0 0 0;">腎機能低下のため、静注薬より内服薬の使用が推奨されます。</p>
        `;
        resultHTML += `</div>`;
        showResult(resultHTML, 'warning');
        return;
    }
    
    // 推奨投与量の表示タイトル
    resultHTML += `<h4 style="margin-top: 0; color: #155724;">🎯 推奨投与量（CCR: ${ccr} mL/min）</h4>`;
    
    // バンコマイシンなど初回投与量がある薬剤
    if (antibiotic.initialDose && adjustmentResult.initialDose && adjustmentResult.maintenanceDose) {
        resultHTML += `
            <p style="margin: 5px 0;"><strong>初回投与量:</strong> ${adjustmentResult.initialDose} ${unit}</p>
            <p style="margin: 5px 0;"><strong>維持投与量:</strong> ${adjustmentResult.maintenanceDose} ${unit}</p>
            <p style="margin: 5px 0;"><strong>投与間隔:</strong> ${adjustmentResult.interval}時間毎</p>
        `;
    } else {
        // 通常の投与量表示
        resultHTML += `
            <p style="margin: 5px 0;"><strong>1回投与量:</strong> ${adjustmentResult.dose} ${unit}</p>
            <p style="margin: 5px 0;"><strong>投与間隔:</strong> ${adjustmentResult.interval}時間毎</p>
            <p style="margin: 5px 0;"><strong>1日投与回数:</strong> ${Math.round(24 / adjustmentResult.interval)}回</p>
        `;
    }
    
    // 特殊な注意事項の追加
    if (antibiotic.noRenalAdjustment) {
        resultHTML += `<p style="color: #28a745; font-weight: bold; margin: 5px 0;">✓ 腎機能調整不要</p>`;
    }
    
    if (antibiotic.tdm) {
        resultHTML += `<p style="color: #fd7e14; font-weight: bold; margin: 5px 0;">⚠️ TDM（血中濃度モニタリング）推奨</p>`;
    }
    
    resultHTML += `</div>`;
    
    // 警告の追加
    let warningClass = '';
    if (ccr < 30) {
        resultHTML += `<p style="color: #d32f2f; font-weight: bold;">⚠️ 重度腎機能障害 (CCR < 30): 投与量の慎重な調整が必要です</p>`;
        warningClass = 'warning';
    } else if (ccr < 60) {
        resultHTML += `<p style="color: #f57c00; font-weight: bold;">⚠️ 中等度腎機能障害 (CCR < 60): 投与量調整が推奨されます</p>`;
        warningClass = 'warning';
    }
    
    // 薬剤別副作用警告
    let sideEffectWarnings = [];
    
    if (antibioticKey === 'imipenem' || antibioticKey === 'meropenem') {
        sideEffectWarnings.push('痙攣に注意');
    }
    
    if (antibioticKey === 'cefepime') {
        sideEffectWarnings.push('脳症に注意');
    }
    
    if (antibioticKey === 'gentamicin' || antibioticKey === 'tobramycin') {
        sideEffectWarnings.push('聴力障害に注意');
        if (ccr < 30) {
            sideEffectWarnings.push('専門医コンサルト推奨');
        }
    }
    
    if (antibioticKey === 'linezolid') {
        sideEffectWarnings.push('血小板減少に注意');
    }
    
    if (antibioticKey === 'vancomycin') {
        sideEffectWarnings.push('1gにつき1時間かけて点滴静注（投与量1g未満でも1時間かける）');
        sideEffectWarnings.push('定常状態前の2-3投目にトラフ・ピークの2点を測定');
        sideEffectWarnings.push('血中濃度シミュレーション依頼を薬局に行う');
    }
    
    if (antibioticKey === 'penicillin_g') {
        sideEffectWarnings.push('高K血症、静脈炎に注意');
    }
    
    if (antibioticKey === 'ceftriaxone') {
        sideEffectWarnings.push('胆汁鬱滞に注意');
    }
    
    if (antibioticKey === 'ciprofloxacin') {
        sideEffectWarnings.push('QT延長・薬物相互作用に注意');
    }
    
    if (antibioticKey === 'azithromycin') {
        sideEffectWarnings.push('QT延長に注意');
    }
    
    if (antibioticKey === 'trimethoprim_sulfamethoxazole') {
        sideEffectWarnings.push('腎機能障害、骨髄抑制に注意');
    }
    
    if (antibioticKey === 'metronidazole') {
        sideEffectWarnings.push('脳症に注意');
    }
    
    if (antibioticKey === 'micafungin') {
        sideEffectWarnings.push('中枢神経系(網膜を含む)に移行しないことに注意');
    }
    
    if (antibioticKey === 'fluconazole') {
        sideEffectWarnings.push('薬物相互作用に注意');
    }
    
    if (antibioticKey === 'acyclovir') {
        sideEffectWarnings.push('脳症に注意');
    }
    
    if (antibioticKey === 'daptomycin' && ccr < 30) {
        sideEffectWarnings.push('感染症内科コンサルト推奨');
    }
    
    if (sideEffectWarnings.length > 0) {
        resultHTML += `
            <div style="margin-top: 15px; padding: 10px; background-color: #fff3e0; border-radius: 5px; border-left: 4px solid #ff9800;">
                <p><strong>⚠️ 重要な副作用・注意事項:</strong></p>
                <ul>
                    ${sideEffectWarnings.map(warning => `<li>${warning}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    resultHTML += `
        <div style="margin-top: 15px; padding: 10px; background-color: #fff3e0; border-radius: 5px;">
            <p><strong>注意事項:</strong></p>
            <ul>
                <li>この計算は参考値です。実際の投与は医師の判断に従ってください</li>
                <li>薬物血中濃度モニタリング（TDM）が推奨される場合があります</li>
                <li>肝機能障害や其他の併存疾患がある場合は追加の調整が必要です</li>
                <li>透析患者では透析後投与が基本となります</li>
            </ul>
        </div>
    `;
    
    showResult(resultHTML, warningClass);
}

// 結果表示関数
function showResult(content, className = '') {
    const resultDiv = document.getElementById('result');
    const resultContent = document.getElementById('resultContent');
    
    resultContent.innerHTML = content;
    resultDiv.className = `result ${className}`;
    resultDiv.classList.remove('hidden');
    
    // 結果セクションまでスクロール
    resultDiv.scrollIntoView({ behavior: 'smooth' });
}

// 入力値のリアルタイム検証
document.addEventListener('DOMContentLoaded', function() {
    // 数値入力フィールドの検証
    const numericInputs = ['age', 'weight', 'creatinine'];
    
    numericInputs.forEach(id => {
        const input = document.getElementById(id);
        input.addEventListener('input', function() {
            // 負の値を防ぐ
            if (this.value < 0) {
                this.value = 0;
            }
        });
    });
});