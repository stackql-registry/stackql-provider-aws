--- 
title: analysis
hide_title: false
hide_table_of_contents: false
keywords:
  - analysis
  - quicksight
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists an <code>analysis</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="analysis" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.analysis" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_analysis"
    values={[
        { label: 'describe_analysis', value: 'describe_analysis' }
    ]}
>
<TabItem value="describe_analysis">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="Analysis" /></td>
    <td><code>object</code></td>
    <td>A metadata structure that contains summary information for the analysis that you're describing.</td>
</tr>
<tr>
    <td><CopyableCode code="RequestId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the request.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#describe_analysis"><CopyableCode code="describe_analysis" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-analysis_id"><code>analysis_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides a summary of the metadata for an analysis.</td>
</tr>
<tr>
    <td><a href="#create_analysis"><CopyableCode code="create_analysis" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-analysis_id"><code>analysis_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a></td>
    <td></td>
    <td>Creates an analysis in Amazon Quick Sight. Analyses can be created either from a template or from an AnalysisDefinition.</td>
</tr>
<tr>
    <td><a href="#update_analysis"><CopyableCode code="update_analysis" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-analysis_id"><code>analysis_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a></td>
    <td></td>
    <td>Updates an analysis in Amazon Quick Sight</td>
</tr>
<tr>
    <td><a href="#delete_analysis"><CopyableCode code="delete_analysis" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-analysis_id"><code>analysis_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-recovery-window-in-days"><code>recovery-window-in-days</code></a>, <a href="#parameter-force-delete-without-recovery"><code>force-delete-without-recovery</code></a></td>
    <td>Deletes an analysis from Amazon Quick Sight. You can optionally include a recovery window during which you can restore the analysis. If you don't specify a recovery window value, the operation defaults to 30 days. Amazon Quick Sight attaches a DeletionTime stamp to the response that specifies the end of the recovery window. At the end of the recovery window, Amazon Quick Sight deletes the analysis permanently. At any time before recovery window ends, you can use the RestoreAnalysis API operation to remove the DeletionTime stamp and cancel the deletion of the analysis. The analysis remains visible in the API until it's deleted, so you can describe it but you can't make a template from it. An analysis that's scheduled for deletion isn't accessible in the Amazon Quick Sight console. To access it in the console, restore it. Deleting an analysis doesn't delete the dashboards that you publish from it.</td>
</tr>
<tr>
    <td><a href="#restore_analysis"><CopyableCode code="restore_analysis" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-analysis_id"><code>analysis_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-restore-to-folders"><code>restore-to-folders</code></a></td>
    <td>Restores an analysis.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-analysis_id">
    <td><CopyableCode code="analysis_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the analysis that you're restoring.</td>
</tr>
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that contains the analysis.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-force-delete-without-recovery">
    <td><CopyableCode code="force-delete-without-recovery" /></td>
    <td><code>boolean</code></td>
    <td>This option defaults to the value NoForceDeleteWithoutRecovery. To immediately delete the analysis, add the ForceDeleteWithoutRecovery option. You can't restore an analysis after it's deleted.</td>
</tr>
<tr id="parameter-recovery-window-in-days">
    <td><CopyableCode code="recovery-window-in-days" /></td>
    <td><code>integer (int64)</code></td>
    <td>A value that specifies the number of days that Amazon Quick Sight waits before it deletes the analysis. You can't use this parameter with the ForceDeleteWithoutRecovery option in the same API call. The default value is 30.</td>
</tr>
<tr id="parameter-restore-to-folders">
    <td><CopyableCode code="restore-to-folders" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value that determines if the analysis will be restored to folders that it previously resided in. A True value restores analysis back to all folders that it previously resided in. A False value restores the analysis but does not restore the analysis back to all previously resided folders. Restoring a restricted analysis requires this parameter to be set to True.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_analysis"
    values={[
        { label: 'describe_analysis', value: 'describe_analysis' }
    ]}
>
<TabItem value="describe_analysis">

Provides a summary of the metadata for an analysis.

```sql
SELECT
Analysis,
RequestId,
Status
FROM aws.quicksight.analysis
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND analysis_id = '{{ analysis_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_analysis"
    values={[
        { label: 'create_analysis', value: 'create_analysis' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_analysis">

Creates an analysis in Amazon Quick Sight. Analyses can be created either from a template or from an AnalysisDefinition.

```sql
INSERT INTO aws.quicksight.analysis (
Name,
Parameters,
Permissions,
SourceEntity,
ThemeArn,
Tags,
Definition,
ValidationStrategy,
FolderArns,
aws_account_id,
analysis_id,
region
)
SELECT 
'{{ Name }}' /* required */,
'{{ Parameters }}',
'{{ Permissions }}',
'{{ SourceEntity }}',
'{{ ThemeArn }}',
'{{ Tags }}',
'{{ Definition }}',
'{{ ValidationStrategy }}',
'{{ FolderArns }}',
'{{ aws_account_id }}',
'{{ analysis_id }}',
'{{ region }}'
RETURNING
AnalysisId,
Arn,
CreationStatus,
RequestId,
Status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: analysis
  props:
    - name: aws_account_id
      value: "{{ aws_account_id }}"
      description: Required parameter for the analysis resource.
    - name: analysis_id
      value: "{{ analysis_id }}"
      description: Required parameter for the analysis resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the analysis resource.
    - name: Name
      value: "{{ Name }}"
    - name: Parameters
      description: |
        A list of Quick Sight parameters and the list's override values.
      value:
        StringParameters:
          - Name: "{{ Name }}"
            Values: "{{ Values }}"
        IntegerParameters:
          - Name: "{{ Name }}"
            Values: "{{ Values }}"
        DecimalParameters:
          - Name: "{{ Name }}"
            Values: "{{ Values }}"
        DateTimeParameters:
          - Name: "{{ Name }}"
            Values: "{{ Values }}"
    - name: Permissions
      value:
        - Principal: "{{ Principal }}"
          Actions: "{{ Actions }}"
    - name: SourceEntity
      description: |
        The source entity of an analysis.
      value:
        SourceTemplate:
          DataSetReferences:
            - DataSetPlaceholder: "{{ DataSetPlaceholder }}"
              DataSetArn: "{{ DataSetArn }}"
          Arn: "{{ Arn }}"
    - name: ThemeArn
      value: "{{ ThemeArn }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: Definition
      description: |
        The definition of an analysis.
      value:
        DataSetIdentifierDeclarations:
          - Identifier: "{{ Identifier }}"
            DataSetArn: "{{ DataSetArn }}"
        Sheets:
          - SheetId: "{{ SheetId }}"
            Title: "{{ Title }}"
            Description: "{{ Description }}"
            Name: "{{ Name }}"
            ParameterControls: "{{ ParameterControls }}"
            FilterControls: "{{ FilterControls }}"
            Visuals: "{{ Visuals }}"
            TextBoxes: "{{ TextBoxes }}"
            Images: "{{ Images }}"
            Layouts: "{{ Layouts }}"
            SheetControlLayouts: "{{ SheetControlLayouts }}"
            ContentType: "{{ ContentType }}"
            CustomActionDefaults:
              highlightOperation:
                Trigger: "{{ Trigger }}"
        TooltipSheets:
          - SheetId: "{{ SheetId }}"
            Name: "{{ Name }}"
            Visuals: "{{ Visuals }}"
            TextBoxes: "{{ TextBoxes }}"
            Images: "{{ Images }}"
            Layouts: "{{ Layouts }}"
        CalculatedFields:
          - DataSetIdentifier: "{{ DataSetIdentifier }}"
            Name: "{{ Name }}"
            Expression: "{{ Expression }}"
        ParameterDeclarations:
          - StringParameterDeclaration:
              ParameterValueType: "{{ ParameterValueType }}"
              Name: "{{ Name }}"
              DefaultValues:
                DynamicValue:
                  UserNameColumn: "{{ UserNameColumn }}"
                  GroupNameColumn: "{{ GroupNameColumn }}"
                  DefaultValueColumn: "{{ DefaultValueColumn }}"
                StaticValues:
                  - "{{ StaticValues }}"
              ValueWhenUnset:
                ValueWhenUnsetOption: "{{ ValueWhenUnsetOption }}"
                CustomValue: "{{ CustomValue }}"
              MappedDataSetParameters:
                - DataSetIdentifier: "{{ DataSetIdentifier }}"
                  DataSetParameterName: "{{ DataSetParameterName }}"
            DecimalParameterDeclaration:
              ParameterValueType: "{{ ParameterValueType }}"
              Name: "{{ Name }}"
              DefaultValues:
                DynamicValue:
                  UserNameColumn: "{{ UserNameColumn }}"
                  GroupNameColumn: "{{ GroupNameColumn }}"
                  DefaultValueColumn: "{{ DefaultValueColumn }}"
                StaticValues:
                  - {{ StaticValues }}
              ValueWhenUnset:
                ValueWhenUnsetOption: "{{ ValueWhenUnsetOption }}"
                CustomValue: {{ CustomValue }}
              MappedDataSetParameters:
                - DataSetIdentifier: "{{ DataSetIdentifier }}"
                  DataSetParameterName: "{{ DataSetParameterName }}"
            IntegerParameterDeclaration:
              ParameterValueType: "{{ ParameterValueType }}"
              Name: "{{ Name }}"
              DefaultValues:
                DynamicValue:
                  UserNameColumn: "{{ UserNameColumn }}"
                  GroupNameColumn: "{{ GroupNameColumn }}"
                  DefaultValueColumn: "{{ DefaultValueColumn }}"
                StaticValues:
                  - {{ StaticValues }}
              ValueWhenUnset:
                ValueWhenUnsetOption: "{{ ValueWhenUnsetOption }}"
                CustomValue: {{ CustomValue }}
              MappedDataSetParameters:
                - DataSetIdentifier: "{{ DataSetIdentifier }}"
                  DataSetParameterName: "{{ DataSetParameterName }}"
            DateTimeParameterDeclaration:
              Name: "{{ Name }}"
              DefaultValues:
                DynamicValue:
                  UserNameColumn: "{{ UserNameColumn }}"
                  GroupNameColumn: "{{ GroupNameColumn }}"
                  DefaultValueColumn: "{{ DefaultValueColumn }}"
                StaticValues:
                  - "{{ StaticValues }}"
                RollingDate:
                  DataSetIdentifier: "{{ DataSetIdentifier }}"
                  Expression: "{{ Expression }}"
              TimeGranularity: "{{ TimeGranularity }}"
              ValueWhenUnset:
                ValueWhenUnsetOption: "{{ ValueWhenUnsetOption }}"
                CustomValue: "{{ CustomValue }}"
              MappedDataSetParameters:
                - DataSetIdentifier: "{{ DataSetIdentifier }}"
                  DataSetParameterName: "{{ DataSetParameterName }}"
        FilterGroups:
          - FilterGroupId: "{{ FilterGroupId }}"
            Filters: "{{ Filters }}"
            ScopeConfiguration:
              SelectedSheets:
                SheetVisualScopingConfigurations:
                  - SheetId: "{{ SheetId }}"
                    Scope: "{{ Scope }}"
                    VisualIds: "{{ VisualIds }}"
              AllSheets: "{{ AllSheets }}"
            Status: "{{ Status }}"
            CrossDataset: "{{ CrossDataset }}"
        ColumnConfigurations:
          - Column:
              DataSetIdentifier: "{{ DataSetIdentifier }}"
              ColumnName: "{{ ColumnName }}"
            FormatConfiguration:
              StringFormatConfiguration:
                NullValueFormatConfiguration:
                  NullString: "{{ NullString }}"
                NumericFormatConfiguration:
                  NumberDisplayFormatConfiguration: "{{ NumberDisplayFormatConfiguration }}"
                  CurrencyDisplayFormatConfiguration: "{{ CurrencyDisplayFormatConfiguration }}"
                  PercentageDisplayFormatConfiguration: "{{ PercentageDisplayFormatConfiguration }}"
              NumberFormatConfiguration:
                FormatConfiguration:
                  NumberDisplayFormatConfiguration: "{{ NumberDisplayFormatConfiguration }}"
                  CurrencyDisplayFormatConfiguration: "{{ CurrencyDisplayFormatConfiguration }}"
                  PercentageDisplayFormatConfiguration: "{{ PercentageDisplayFormatConfiguration }}"
              DateTimeFormatConfiguration:
                DateTimeFormat: "{{ DateTimeFormat }}"
                NullValueFormatConfiguration:
                  NullString: "{{ NullString }}"
                NumericFormatConfiguration:
                  NumberDisplayFormatConfiguration: "{{ NumberDisplayFormatConfiguration }}"
                  CurrencyDisplayFormatConfiguration: "{{ CurrencyDisplayFormatConfiguration }}"
                  PercentageDisplayFormatConfiguration: "{{ PercentageDisplayFormatConfiguration }}"
            Role: "{{ Role }}"
            ColorsConfiguration:
              CustomColors:
                - FieldValue: "{{ FieldValue }}"
                  Color: "{{ Color }}"
                  SpecialValue: "{{ SpecialValue }}"
            DecalSettingsConfiguration:
              CustomDecalSettings:
                - ElementValue: "{{ ElementValue }}"
                  DecalVisibility: "{{ DecalVisibility }}"
                  DecalColor: "{{ DecalColor }}"
                  DecalPatternType: "{{ DecalPatternType }}"
                  DecalStyleType: "{{ DecalStyleType }}"
        AnalysisDefaults:
          DefaultNewSheetConfiguration:
            InteractiveLayoutConfiguration:
              Grid:
                CanvasSizeOptions: "{{ CanvasSizeOptions }}"
              FreeForm:
                CanvasSizeOptions: "{{ CanvasSizeOptions }}"
            PaginatedLayoutConfiguration:
              SectionBased:
                CanvasSizeOptions: "{{ CanvasSizeOptions }}"
            SheetContentType: "{{ SheetContentType }}"
        Options:
          Timezone: "{{ Timezone }}"
          WeekStart: "{{ WeekStart }}"
          QBusinessInsightsStatus: "{{ QBusinessInsightsStatus }}"
          ExcludedDataSetArns:
            - "{{ ExcludedDataSetArns }}"
          CustomActionDefaults:
            highlightOperation:
              Trigger: "{{ Trigger }}"
        QueryExecutionOptions:
          QueryExecutionMode: "{{ QueryExecutionMode }}"
        StaticFiles:
          - ImageStaticFile:
              StaticFileId: "{{ StaticFileId }}"
              Source:
                UrlOptions:
                  Url: "{{ Url }}"
                S3Options:
                  BucketName: "{{ BucketName }}"
                  ObjectKey: "{{ ObjectKey }}"
                  Region: "{{ Region }}"
            SpatialStaticFile:
              StaticFileId: "{{ StaticFileId }}"
              Source:
                UrlOptions:
                  Url: "{{ Url }}"
                S3Options:
                  BucketName: "{{ BucketName }}"
                  ObjectKey: "{{ ObjectKey }}"
                  Region: "{{ Region }}"
    - name: ValidationStrategy
      description: |
        The option to relax the validation that is required to create and update analyses, dashboards, and templates with definition objects. When you set this value to LENIENT, validation is skipped for specific errors.
      value:
        Mode: "{{ Mode }}"
    - name: FolderArns
      value:
        - "{{ FolderArns }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_analysis"
    values={[
        { label: 'update_analysis', value: 'update_analysis' }
    ]}
>
<TabItem value="update_analysis">

Updates an analysis in Amazon Quick Sight

```sql
UPDATE aws.quicksight.analysis
SET 
Name = '{{ Name }}',
Parameters = '{{ Parameters }}',
SourceEntity = '{{ SourceEntity }}',
ThemeArn = '{{ ThemeArn }}',
Definition = '{{ Definition }}',
ValidationStrategy = '{{ ValidationStrategy }}'
WHERE 
aws_account_id = '{{ aws_account_id }}' --required
AND analysis_id = '{{ analysis_id }}' --required
AND region = '{{ region }}' --required
AND Name = '{{ Name }}' --required
RETURNING
AnalysisId,
Arn,
RequestId,
Status,
UpdateStatus;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_analysis"
    values={[
        { label: 'delete_analysis', value: 'delete_analysis' }
    ]}
>
<TabItem value="delete_analysis">

Deletes an analysis from Amazon Quick Sight. You can optionally include a recovery window during which you can restore the analysis. If you don't specify a recovery window value, the operation defaults to 30 days. Amazon Quick Sight attaches a DeletionTime stamp to the response that specifies the end of the recovery window. At the end of the recovery window, Amazon Quick Sight deletes the analysis permanently. At any time before recovery window ends, you can use the RestoreAnalysis API operation to remove the DeletionTime stamp and cancel the deletion of the analysis. The analysis remains visible in the API until it's deleted, so you can describe it but you can't make a template from it. An analysis that's scheduled for deletion isn't accessible in the Amazon Quick Sight console. To access it in the console, restore it. Deleting an analysis doesn't delete the dashboards that you publish from it.

```sql
DELETE FROM aws.quicksight.analysis
WHERE aws_account_id = '{{ aws_account_id }}' --required
AND analysis_id = '{{ analysis_id }}' --required
AND region = '{{ region }}' --required
AND `recovery-window-in-days` = '{{ recovery-window-in-days }}'
AND `force-delete-without-recovery` = '{{ force-delete-without-recovery }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="restore_analysis"
    values={[
        { label: 'restore_analysis', value: 'restore_analysis' }
    ]}
>
<TabItem value="restore_analysis">

Restores an analysis.

```sql
EXEC aws.quicksight.analysis.restore_analysis 
@aws_account_id='{{ aws_account_id }}' --required, 
@analysis_id='{{ analysis_id }}' --required, 
@region='{{ region }}' --required, 
@restore-to-folders={{ restore-to-folders }}
;
```
</TabItem>
</Tabs>
