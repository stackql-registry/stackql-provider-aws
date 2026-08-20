--- 
title: templates
hide_title: false
hide_table_of_contents: false
keywords:
  - templates
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

Creates, updates, deletes, gets or lists a <code>templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_template"
    values={[
        { label: 'describe_template', value: 'describe_template' },
        { label: 'list_templates', value: 'list_templates' }
    ]}
>
<TabItem value="describe_template">

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
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the request.</td>
</tr>
<tr>
    <td><CopyableCode code="template" /></td>
    <td><code>object</code></td>
    <td>The template structure for the object you want to describe.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_templates">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>A summary of a template.</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time that this template was created.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time that this template was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_version_number" /></td>
    <td><code>integer (int64)</code></td>
    <td>A structure containing a list of version numbers for the template summary.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A display name for the template.</td>
</tr>
<tr>
    <td><CopyableCode code="template_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the template. This ID is unique per Amazon Web Services Region for each Amazon Web Services account. (pattern: &lt;code&gt;&#91;\w\-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#describe_template"><CopyableCode code="describe_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-template_id"><code>template_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-version-number"><code>version-number</code></a>, <a href="#parameter-alias-name"><code>alias-name</code></a></td>
    <td>Describes a template's metadata.</td>
</tr>
<tr>
    <td><a href="#list_templates"><CopyableCode code="list_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-result"><code>max-result</code></a></td>
    <td>Lists all the templates in the current Amazon Quick Sight account.</td>
</tr>
<tr>
    <td><a href="#create_template"><CopyableCode code="create_template" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-template_id"><code>template_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a template either from a TemplateDefinition or from an existing Quick Sight analysis or template. You can use the resulting template to create additional dashboards, templates, or analyses. A template is an entity in Quick Sight that encapsulates the metadata required to create an analysis and that you can use to create s dashboard. A template adds a layer of abstraction by using placeholders to replace the dataset associated with the analysis. You can use templates to create dashboards by replacing dataset placeholders with datasets that follow the same schema that was used to create the source analysis and template.</td>
</tr>
<tr>
    <td><a href="#update_template"><CopyableCode code="update_template" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-template_id"><code>template_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a template from an existing Amazon Quick Sight analysis or another template.</td>
</tr>
<tr>
    <td><a href="#delete_template"><CopyableCode code="delete_template" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-template_id"><code>template_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-version-number"><code>version-number</code></a></td>
    <td>Deletes a template.</td>
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
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that contains the template that you're deleting.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-template_id">
    <td><CopyableCode code="template_id" /></td>
    <td><code>string</code></td>
    <td>An ID for the template you want to delete.</td>
</tr>
<tr id="parameter-alias-name">
    <td><CopyableCode code="alias-name" /></td>
    <td><code>string</code></td>
    <td>The alias of the template that you want to describe. If you name a specific alias, you describe the version that the alias points to. You can specify the latest version of the template by providing the keyword $LATEST in the AliasName parameter. The keyword $PUBLISHED doesn't apply to templates.</td>
</tr>
<tr id="parameter-max-result">
    <td><CopyableCode code="max-result" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned per request.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null if there are no more results.</td>
</tr>
<tr id="parameter-version-number">
    <td><CopyableCode code="version-number" /></td>
    <td><code>integer (int64)</code></td>
    <td>Specifies the version of the template that you want to delete. If you don't provide a version number, DeleteTemplate deletes all versions of the template.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_template"
    values={[
        { label: 'describe_template', value: 'describe_template' },
        { label: 'list_templates', value: 'list_templates' }
    ]}
>
<TabItem value="describe_template">

Describes a template's metadata.

```sql
SELECT
request_id,
status,
template
FROM aws.quicksight.templates
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND template_id = '{{ template_id }}' -- required
AND region = '{{ region }}' -- required
AND `version-number` = '{{ version-number }}'
AND `alias-name` = '{{ alias-name }}'
;
```
</TabItem>
<TabItem value="list_templates">

Lists all the templates in the current Amazon Quick Sight account.

```sql
SELECT
arn,
created_time,
last_updated_time,
latest_version_number,
name,
template_id
FROM aws.quicksight.templates
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `max-result` = '{{ max-result }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_template"
    values={[
        { label: 'create_template', value: 'create_template' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_template">

Creates a template either from a TemplateDefinition or from an existing Quick Sight analysis or template. You can use the resulting template to create additional dashboards, templates, or analyses. A template is an entity in Quick Sight that encapsulates the metadata required to create an analysis and that you can use to create s dashboard. A template adds a layer of abstraction by using placeholders to replace the dataset associated with the analysis. You can use templates to create dashboards by replacing dataset placeholders with datasets that follow the same schema that was used to create the source analysis and template.

```sql
INSERT INTO aws.quicksight.templates (
Name,
Permissions,
SourceEntity,
Tags,
VersionDescription,
Definition,
ValidationStrategy,
aws_account_id,
template_id,
region
)
SELECT 
'{{ Name }}',
'{{ Permissions }}',
'{{ SourceEntity }}',
'{{ Tags }}',
'{{ VersionDescription }}',
'{{ Definition }}',
'{{ ValidationStrategy }}',
'{{ aws_account_id }}',
'{{ template_id }}',
'{{ region }}'
RETURNING
arn,
creation_status,
request_id,
status,
template_id,
version_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: templates
  props:
    - name: aws_account_id
      value: "{{ aws_account_id }}"
      description: Required parameter for the templates resource.
    - name: template_id
      value: "{{ template_id }}"
      description: Required parameter for the templates resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the templates resource.
    - name: Name
      value: "{{ Name }}"
    - name: Permissions
      value:
        - Principal: "{{ Principal }}"
          Actions: "{{ Actions }}"
    - name: SourceEntity
      description: |
        The source entity of the template.
      value:
        SourceAnalysis:
          Arn: "{{ Arn }}"
          DataSetReferences:
            - DataSetPlaceholder: "{{ DataSetPlaceholder }}"
              DataSetArn: "{{ DataSetArn }}"
          TopicReferences:
            - TopicPlaceholder: "{{ TopicPlaceholder }}"
              TopicArn: "{{ TopicArn }}"
        SourceTemplate:
          Arn: "{{ Arn }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: VersionDescription
      value: "{{ VersionDescription }}"
    - name: Definition
      description: |
        The detailed definition of a template.
      value:
        DataSetConfigurations:
          - Placeholder: "{{ Placeholder }}"
            DataSetSchema:
              ColumnSchemaList:
                - Name: "{{ Name }}"
                  DataType: "{{ DataType }}"
                  GeographicRole: "{{ GeographicRole }}"
            ColumnGroupSchemaList: "{{ ColumnGroupSchemaList }}"
        TopicConfigurations:
          - Placeholder: "{{ Placeholder }}"
            DataSetSchema:
              ColumnSchemaList:
                - Name: "{{ Name }}"
                  DataType: "{{ DataType }}"
                  GeographicRole: "{{ GeographicRole }}"
            ColumnGroupSchemaList: "{{ ColumnGroupSchemaList }}"
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
            TopicIdentifier: "{{ TopicIdentifier }}"
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
              TopicIdentifier: "{{ TopicIdentifier }}"
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
          VisualMessages:
            NoDataMessage:
              Enabled: {{ Enabled }}
              Title: "{{ Title }}"
              TitleVisibility: "{{ TitleVisibility }}"
              Description: "{{ Description }}"
              DescriptionVisibility: "{{ DescriptionVisibility }}"
              LinkText: "{{ LinkText }}"
              LinkUrl: "{{ LinkUrl }}"
              LinkVisibility: "{{ LinkVisibility }}"
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
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_template"
    values={[
        { label: 'update_template', value: 'update_template' }
    ]}
>
<TabItem value="update_template">

Updates a template from an existing Amazon Quick Sight analysis or another template.

```sql
UPDATE aws.quicksight.templates
SET 
SourceEntity = '{{ SourceEntity }}',
VersionDescription = '{{ VersionDescription }}',
Name = '{{ Name }}',
Definition = '{{ Definition }}',
ValidationStrategy = '{{ ValidationStrategy }}'
WHERE 
aws_account_id = '{{ aws_account_id }}' --required
AND template_id = '{{ template_id }}' --required
AND region = '{{ region }}' --required
RETURNING
arn,
creation_status,
request_id,
status,
template_id,
version_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_template"
    values={[
        { label: 'delete_template', value: 'delete_template' }
    ]}
>
<TabItem value="delete_template">

Deletes a template.

```sql
DELETE FROM aws.quicksight.templates
WHERE aws_account_id = '{{ aws_account_id }}' --required
AND template_id = '{{ template_id }}' --required
AND region = '{{ region }}' --required
AND `version-number` = '{{ version-number }}'
;
```
</TabItem>
</Tabs>
