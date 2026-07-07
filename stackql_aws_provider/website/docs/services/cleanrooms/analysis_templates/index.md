--- 
title: analysis_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - analysis_templates
  - cleanrooms
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

Creates, updates, deletes, gets or lists an <code>analysis_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="analysis_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cleanrooms.analysis_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_analysis_template"
    values={[
        { label: 'get_analysis_template', value: 'get_analysis_template' },
        { label: 'list_analysis_templates', value: 'list_analysis_templates' }
    ]}
>
<TabItem value="get_analysis_template">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the analysis template. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the analysis template. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_&#93;((&#91;a-zA-Z0-9_ &#93;+-)*(&#91;a-zA-Z0-9_ &#93;+))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="analysisParameters" /></td>
    <td><code>array</code></td>
    <td>The parameters of the analysis template.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the analysis template. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:membership/&#91;\d\w-&#93;+/analysistemplate/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaborationArn" /></td>
    <td><code>string</code></td>
    <td>The unique ARN for the analysis template’s associated collaboration. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:collaboration/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaborationId" /></td>
    <td><code>string</code></td>
    <td>The unique ID for the associated collaboration of the analysis template. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the analysis template was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the analysis template. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="errorMessageConfiguration" /></td>
    <td><code>object</code></td>
    <td>A structure that defines the level of detail included in error messages returned by PySpark jobs. This configuration allows you to control the verbosity of error messages to help with troubleshooting PySpark jobs while maintaining appropriate security controls.</td>
</tr>
<tr>
    <td><CopyableCode code="format_" /></td>
    <td><code>string</code></td>
    <td>The format of the analysis template. (SQL, PYSPARK_1_0)</td>
</tr>
<tr>
    <td><CopyableCode code="membershipArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the member who created the analysis template. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:membership/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="membershipId" /></td>
    <td><code>string</code></td>
    <td>The identifier of a member who created the analysis template. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="schema" /></td>
    <td><code>object</code></td>
    <td>A relation within an analysis.</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>object</code></td>
    <td>The structure that defines the body of the analysis template.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceMetadata" /></td>
    <td><code>object</code></td>
    <td>The source metadata for the analysis template.</td>
</tr>
<tr>
    <td><CopyableCode code="syntheticDataParameters" /></td>
    <td><code>object</code></td>
    <td>The parameters that control how synthetic data is generated, including privacy settings, column classifications, and other configuration options that affect the data synthesis process.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the analysis template was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="validations" /></td>
    <td><code>array</code></td>
    <td>Information about the validations performed on the analysis template.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_analysis_templates">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the analysis template. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the analysis template. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_&#93;((&#91;a-zA-Z0-9_ &#93;+-)*(&#91;a-zA-Z0-9_ &#93;+))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the analysis template. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:membership/&#91;\d\w-&#93;+/analysistemplate/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaborationArn" /></td>
    <td><code>string</code></td>
    <td>The unique ARN for the analysis template summary’s associated collaboration. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:collaboration/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaborationId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the collaboration that the analysis template summary belongs to. Currently accepts collaboration ID. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the analysis template summary was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the analysis template. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="isSyntheticData" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if this analysis template summary generated synthetic data.</td>
</tr>
<tr>
    <td><CopyableCode code="membershipArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the member who created the analysis template. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:membership/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="membershipId" /></td>
    <td><code>string</code></td>
    <td>The identifier for a membership resource. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the analysis template summary was last updated.</td>
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
    <td><a href="#get_analysis_template"><CopyableCode code="get_analysis_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-analysis_template_identifier"><code>analysis_template_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves an analysis template.</td>
</tr>
<tr>
    <td><a href="#list_analysis_templates"><CopyableCode code="list_analysis_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists analysis templates that the caller owns.</td>
</tr>
<tr>
    <td><a href="#create_analysis_template"><CopyableCode code="create_analysis_template" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-format"><code>format</code></a>, <a href="#parameter-source"><code>source</code></a></td>
    <td></td>
    <td>Creates a new analysis template.</td>
</tr>
<tr>
    <td><a href="#update_analysis_template"><CopyableCode code="update_analysis_template" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-analysis_template_identifier"><code>analysis_template_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the analysis template metadata.</td>
</tr>
<tr>
    <td><a href="#delete_analysis_template"><CopyableCode code="delete_analysis_template" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-analysis_template_identifier"><code>analysis_template_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an analysis template.</td>
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
<tr id="parameter-analysis_template_identifier">
    <td><CopyableCode code="analysis_template_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier for the analysis template resource.</td>
</tr>
<tr id="parameter-membership_identifier">
    <td><CopyableCode code="membership_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier for a membership resource.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results that are returned for an API request call. The service chooses a default number if you don't set one. The service might return a `nextToken` even if the `maxResults` value has not been met.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token that's used to fetch the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_analysis_template"
    values={[
        { label: 'get_analysis_template', value: 'get_analysis_template' },
        { label: 'list_analysis_templates', value: 'list_analysis_templates' }
    ]}
>
<TabItem value="get_analysis_template">

Retrieves an analysis template.

```sql
SELECT
id,
name,
analysisParameters,
arn,
collaborationArn,
collaborationId,
createTime,
description,
errorMessageConfiguration,
format_,
membershipArn,
membershipId,
schema,
source,
sourceMetadata,
syntheticDataParameters,
updateTime,
validations
FROM aws.cleanrooms.analysis_templates
WHERE membership_identifier = '{{ membership_identifier }}' -- required
AND analysis_template_identifier = '{{ analysis_template_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_analysis_templates">

Lists analysis templates that the caller owns.

```sql
SELECT
id,
name,
arn,
collaborationArn,
collaborationId,
createTime,
description,
isSyntheticData,
membershipArn,
membershipId,
updateTime
FROM aws.cleanrooms.analysis_templates
WHERE membership_identifier = '{{ membership_identifier }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_analysis_template"
    values={[
        { label: 'create_analysis_template', value: 'create_analysis_template' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_analysis_template">

Creates a new analysis template.

```sql
INSERT INTO aws.cleanrooms.analysis_templates (
description,
name,
format,
source,
tags,
analysisParameters,
schema,
errorMessageConfiguration,
syntheticDataParameters,
membership_identifier,
region
)
SELECT 
'{{ description }}',
'{{ name }}' /* required */,
'{{ format }}' /* required */,
'{{ source }}' /* required */,
'{{ tags }}',
'{{ analysisParameters }}',
'{{ schema }}',
'{{ errorMessageConfiguration }}',
'{{ syntheticDataParameters }}',
'{{ membership_identifier }}',
'{{ region }}'
RETURNING
analysisTemplate
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: analysis_templates
  props:
    - name: membership_identifier
      value: "{{ membership_identifier }}"
      description: Required parameter for the analysis_templates resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the analysis_templates resource.
    - name: description
      value: "{{ description }}"
    - name: name
      value: "{{ name }}"
    - name: format
      value: "{{ format }}"
      valid_values: ['SQL', 'PYSPARK_1_0']
    - name: source
      description: |
        The structure that defines the body of the analysis template.
      value:
        text: "{{ text }}"
        artifacts:
          entryPoint:
            location:
              bucket: "{{ bucket }}"
              key: "{{ key }}"
          additionalArtifacts:
            - location:
                bucket: "{{ bucket }}"
                key: "{{ key }}"
          roleArn: "{{ roleArn }}"
    - name: tags
      value: "{{ tags }}"
      description: |
        Map of tags assigned to a resource
    - name: analysisParameters
      value:
        - name: "{{ name }}"
          type_: "{{ type_ }}"
          defaultValue: "{{ defaultValue }}"
    - name: schema
      description: |
        A relation within an analysis.
      value:
        referencedTables:
          - "{{ referencedTables }}"
    - name: errorMessageConfiguration
      description: |
        A structure that defines the level of detail included in error messages returned by PySpark jobs. This configuration allows you to control the verbosity of error messages to help with troubleshooting PySpark jobs while maintaining appropriate security controls.
      value:
        type_: "{{ type_ }}"
    - name: syntheticDataParameters
      description: |
        The parameters that control how synthetic data is generated, including privacy settings, column classifications, and other configuration options that affect the data synthesis process.
      value:
        mlSyntheticDataParameters:
          epsilon: {{ epsilon }}
          maxMembershipInferenceAttackScore: {{ maxMembershipInferenceAttackScore }}
          columnClassification:
            columnMapping:
              - columnName: "{{ columnName }}"
                columnType: "{{ columnType }}"
                isPredictiveValue: {{ isPredictiveValue }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_analysis_template"
    values={[
        { label: 'update_analysis_template', value: 'update_analysis_template' }
    ]}
>
<TabItem value="update_analysis_template">

Updates the analysis template metadata.

```sql
UPDATE aws.cleanrooms.analysis_templates
SET 
description = '{{ description }}'
WHERE 
membership_identifier = '{{ membership_identifier }}' --required
AND analysis_template_identifier = '{{ analysis_template_identifier }}' --required
AND region = '{{ region }}' --required
RETURNING
analysisTemplate;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_analysis_template"
    values={[
        { label: 'delete_analysis_template', value: 'delete_analysis_template' }
    ]}
>
<TabItem value="delete_analysis_template">

Deletes an analysis template.

```sql
DELETE FROM aws.cleanrooms.analysis_templates
WHERE membership_identifier = '{{ membership_identifier }}' --required
AND analysis_template_identifier = '{{ analysis_template_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
