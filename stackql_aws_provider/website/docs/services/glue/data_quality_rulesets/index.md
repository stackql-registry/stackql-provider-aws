--- 
title: data_quality_rulesets
hide_title: false
hide_table_of_contents: false
keywords:
  - data_quality_rulesets
  - glue
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

Creates, updates, deletes, gets or lists a <code>data_quality_rulesets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_quality_rulesets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.data_quality_rulesets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_data_quality_ruleset"
    values={[
        { label: 'get_data_quality_ruleset', value: 'get_data_quality_ruleset' }
    ]}
>
<TabItem value="get_data_quality_ruleset">

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
    <td><CopyableCode code="created_on" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp. The time and date that this data quality ruleset was created.</td>
</tr>
<tr>
    <td><CopyableCode code="data_quality_security_configuration" /></td>
    <td><code>string</code></td>
    <td>The name of the security configuration created with the data quality encryption option. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the ruleset. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_on" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp. The last point in time when this data quality ruleset was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the ruleset. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="recommendation_run_id" /></td>
    <td><code>string</code></td>
    <td>When a ruleset was created from a recommendation run, this run ID is generated to link the two together. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ruleset" /></td>
    <td><code>string</code></td>
    <td>A Data Quality Definition Language (DQDL) ruleset. For more information, see the Glue developer guide.</td>
</tr>
<tr>
    <td><CopyableCode code="target_table" /></td>
    <td><code>object</code></td>
    <td>The name and database name of the target table.</td>
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
    <td><a href="#get_data_quality_ruleset"><CopyableCode code="get_data_quality_ruleset" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns an existing ruleset by identifier or name.</td>
</tr>
<tr>
    <td><a href="#create_data_quality_ruleset"><CopyableCode code="create_data_quality_ruleset" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a data quality ruleset with DQDL rules applied to a specified Glue table. You create the ruleset using the Data Quality Definition Language (DQDL). For more information, see the Glue developer guide.</td>
</tr>
<tr>
    <td><a href="#update_data_quality_ruleset"><CopyableCode code="update_data_quality_ruleset" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the specified data quality ruleset.</td>
</tr>
<tr>
    <td><a href="#delete_data_quality_ruleset"><CopyableCode code="delete_data_quality_ruleset" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a data quality ruleset.</td>
</tr>
<tr>
    <td><a href="#cancel_data_quality_ruleset_evaluation_run"><CopyableCode code="cancel_data_quality_ruleset_evaluation_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RunId"><code>RunId</code></a></td>
    <td></td>
    <td>Cancels a run where a ruleset is being evaluated against a data source.</td>
</tr>
<tr>
    <td><a href="#list_data_quality_rulesets"><CopyableCode code="list_data_quality_rulesets" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a paginated list of rulesets for the specified list of Glue tables.</td>
</tr>
<tr>
    <td><a href="#start_data_quality_ruleset_evaluation_run"><CopyableCode code="start_data_quality_ruleset_evaluation_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DataSource"><code>DataSource</code></a>, <a href="#parameter-Role"><code>Role</code></a>, <a href="#parameter-RulesetNames"><code>RulesetNames</code></a></td>
    <td></td>
    <td>Once you have a ruleset definition (either recommended or your own), you call this operation to evaluate the ruleset against a data source (Glue table). The evaluation computes results which you can retrieve with the GetDataQualityResult API.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_data_quality_ruleset"
    values={[
        { label: 'get_data_quality_ruleset', value: 'get_data_quality_ruleset' }
    ]}
>
<TabItem value="get_data_quality_ruleset">

Returns an existing ruleset by identifier or name.

```sql
SELECT
created_on,
data_quality_security_configuration,
description,
last_modified_on,
name,
recommendation_run_id,
ruleset,
target_table
FROM aws.glue.data_quality_rulesets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_data_quality_ruleset"
    values={[
        { label: 'create_data_quality_ruleset', value: 'create_data_quality_ruleset' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_data_quality_ruleset">

Creates a data quality ruleset with DQDL rules applied to a specified Glue table. You create the ruleset using the Data Quality Definition Language (DQDL). For more information, see the Glue developer guide.

```sql
INSERT INTO aws.glue.data_quality_rulesets (
Name,
Description,
Ruleset,
Tags,
TargetTable,
DataQualitySecurityConfiguration,
ClientToken,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ Ruleset }}',
'{{ Tags }}',
'{{ TargetTable }}',
'{{ DataQualitySecurityConfiguration }}',
'{{ ClientToken }}',
'{{ region }}'
RETURNING
name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: data_quality_rulesets
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the data_quality_rulesets resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        A unique name for the data quality ruleset.
    - name: Description
      value: "{{ Description }}"
      description: |
        A description of the data quality ruleset.
    - name: Ruleset
      value: "{{ Ruleset }}"
      description: |
        A Data Quality Definition Language (DQDL) ruleset. For more information, see the Glue developer guide.
    - name: Tags
      value: "{{ Tags }}"
      description: |
        A list of tags applied to the data quality ruleset.
    - name: TargetTable
      description: |
        A target table associated with the data quality ruleset.
      value:
        TableName: "{{ TableName }}"
        DatabaseName: "{{ DatabaseName }}"
        CatalogId: "{{ CatalogId }}"
    - name: DataQualitySecurityConfiguration
      value: "{{ DataQualitySecurityConfiguration }}"
      description: |
        The name of the security configuration created with the data quality encryption option.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        Used for idempotency and is recommended to be set to a random ID (such as a UUID) to avoid creating or starting multiple instances of the same resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_data_quality_ruleset"
    values={[
        { label: 'update_data_quality_ruleset', value: 'update_data_quality_ruleset' }
    ]}
>
<TabItem value="update_data_quality_ruleset">

Updates the specified data quality ruleset.

```sql
UPDATE aws.glue.data_quality_rulesets
SET 
Name = '{{ Name }}',
Description = '{{ Description }}',
Ruleset = '{{ Ruleset }}'
WHERE 
region = '{{ region }}' --required
RETURNING
description,
name,
ruleset;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_data_quality_ruleset"
    values={[
        { label: 'delete_data_quality_ruleset', value: 'delete_data_quality_ruleset' }
    ]}
>
<TabItem value="delete_data_quality_ruleset">

Deletes a data quality ruleset.

```sql
DELETE FROM aws.glue.data_quality_rulesets
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_data_quality_ruleset_evaluation_run"
    values={[
        { label: 'cancel_data_quality_ruleset_evaluation_run', value: 'cancel_data_quality_ruleset_evaluation_run' },
        { label: 'list_data_quality_rulesets', value: 'list_data_quality_rulesets' },
        { label: 'start_data_quality_ruleset_evaluation_run', value: 'start_data_quality_ruleset_evaluation_run' }
    ]}
>
<TabItem value="cancel_data_quality_ruleset_evaluation_run">

Cancels a run where a ruleset is being evaluated against a data source.

```sql
EXEC aws.glue.data_quality_rulesets.cancel_data_quality_ruleset_evaluation_run 
@region='{{ region }}' --required 
@@json=
'{
"RunId": "{{ RunId }}"
}'
;
```
</TabItem>
<TabItem value="list_data_quality_rulesets">

Returns a paginated list of rulesets for the specified list of Glue tables.

```sql
EXEC aws.glue.data_quality_rulesets.list_data_quality_rulesets 
@region='{{ region }}' --required 
@@json=
'{
"NextToken": "{{ NextToken }}", 
"MaxResults": {{ MaxResults }}, 
"Filter": "{{ Filter }}", 
"Tags": "{{ Tags }}"
}'
;
```
</TabItem>
<TabItem value="start_data_quality_ruleset_evaluation_run">

Once you have a ruleset definition (either recommended or your own), you call this operation to evaluate the ruleset against a data source (Glue table). The evaluation computes results which you can retrieve with the GetDataQualityResult API.

```sql
EXEC aws.glue.data_quality_rulesets.start_data_quality_ruleset_evaluation_run 
@region='{{ region }}' --required 
@@json=
'{
"DataSource": "{{ DataSource }}", 
"Role": "{{ Role }}", 
"NumberOfWorkers": {{ NumberOfWorkers }}, 
"Timeout": {{ Timeout }}, 
"ClientToken": "{{ ClientToken }}", 
"AdditionalRunOptions": "{{ AdditionalRunOptions }}", 
"RulesetNames": "{{ RulesetNames }}", 
"AdditionalDataSources": "{{ AdditionalDataSources }}"
}'
;
```
</TabItem>
</Tabs>
