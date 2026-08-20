--- 
title: intermediate_tables
hide_title: false
hide_table_of_contents: false
keywords:
  - intermediate_tables
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

Creates, updates, deletes, gets or lists an <code>intermediate_tables</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="intermediate_tables" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cleanrooms.intermediate_tables" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_intermediate_table"
    values={[
        { label: 'get_intermediate_table', value: 'get_intermediate_table' },
        { label: 'list_intermediate_tables', value: 'list_intermediate_tables' }
    ]}
>
<TabItem value="get_intermediate_table">

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
    <td>The unique identifier of the intermediate table. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the intermediate table. (pattern: &lt;code&gt;(?!\s*$)&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="analysis_rule_types" /></td>
    <td><code>array</code></td>
    <td>The types of analysis rules associated with the intermediate table.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the intermediate table. (pattern: &lt;code&gt;arn:aws:cleanrooms:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:membership\/&#91;\d\w-&#93;+\/intermediatetable\/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="child_resources" /></td>
    <td><code>array</code></td>
    <td>The child resources that depend on this intermediate table.</td>
</tr>
<tr>
    <td><CopyableCode code="collaboration_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the collaboration that contains the intermediate table. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:collaboration/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaboration_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the collaboration that contains the intermediate table. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the intermediate table was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the intermediate table. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="intermediate_table_version" /></td>
    <td><code>object</code></td>
    <td>The details of the currently active version of the intermediate table.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the KMS key used to encrypt the intermediate table data. (pattern: &lt;code&gt;arn:aws:kms:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:key/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="membership_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the membership that contains the intermediate table. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:membership/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="membership_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the membership that contains the intermediate table. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="population_analysis_configuration" /></td>
    <td><code>object</code></td>
    <td>Contains the configuration that defines the analysis used to populate an intermediate table.</td>
</tr>
<tr>
    <td><CopyableCode code="retention_in_days" /></td>
    <td><code>integer</code></td>
    <td>The number of days that populated data is retained before expiring.</td>
</tr>
<tr>
    <td><CopyableCode code="schema" /></td>
    <td><code>object</code></td>
    <td>The schema of the intermediate table, containing column definitions. Available after the table has been successfully populated.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the intermediate table. (CREATED, POPULATE_STARTED, POPULATE_SUCCESS, POPULATE_FAILED, DISALLOWED_BY_DATA_PROVIDER, BASE_TABLE_REMOVED, RETENTION_PERIOD_EXPIRED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for the current status of the intermediate table.</td>
</tr>
<tr>
    <td><CopyableCode code="table_dependencies" /></td>
    <td><code>array</code></td>
    <td>The list of base tables that this intermediate table depends on.</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the intermediate table was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_intermediate_tables">

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
    <td>The unique identifier of the intermediate table. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the intermediate table. (pattern: &lt;code&gt;(?!\s*$)&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="analysis_rule_types" /></td>
    <td><code>array</code></td>
    <td>The types of analysis rules associated with the intermediate table.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the intermediate table. (pattern: &lt;code&gt;arn:aws:cleanrooms:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:membership\/&#91;\d\w-&#93;+\/intermediatetable\/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaboration_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the collaboration that contains the intermediate table. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:collaboration/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaboration_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the collaboration that contains the intermediate table. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the intermediate table was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the intermediate table. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="membership_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the membership that contains the intermediate table. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:membership/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="membership_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the membership that contains the intermediate table. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="retention_in_days" /></td>
    <td><code>integer</code></td>
    <td>The number of days that populated data is retained before expiring.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the intermediate table. (CREATED, POPULATE_STARTED, POPULATE_SUCCESS, POPULATE_FAILED, DISALLOWED_BY_DATA_PROVIDER, BASE_TABLE_REMOVED, RETENTION_PERIOD_EXPIRED)</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the intermediate table was last updated.</td>
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
    <td><a href="#get_intermediate_table"><CopyableCode code="get_intermediate_table" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-intermediate_table_identifier"><code>intermediate_table_identifier</code></a>, <a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves an intermediate table. Returns the full details of the intermediate table, including schema, table dependencies, inherited constraints, child resources, and status. Only the intermediate table owner can call this operation.</td>
</tr>
<tr>
    <td><a href="#list_intermediate_tables"><CopyableCode code="list_intermediate_tables" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists intermediate tables owned by the caller in a membership. We recommend using pagination to ensure that the operation returns quickly and successfully.</td>
</tr>
<tr>
    <td><a href="#create_intermediate_table"><CopyableCode code="create_intermediate_table" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-populationAnalysisConfiguration"><code>populationAnalysisConfiguration</code></a></td>
    <td></td>
    <td>Creates an intermediate table in a membership. The intermediate table is owned by the member with the CAN_QUERY ability. To populate the table with results, use PopulateIntermediateTable.</td>
</tr>
<tr>
    <td><a href="#update_intermediate_table"><CopyableCode code="update_intermediate_table" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-intermediate_table_identifier"><code>intermediate_table_identifier</code></a>, <a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an intermediate table. You can update the description, KMS key ARN, and column types of existing columns. Only the intermediate table owner can call this operation.</td>
</tr>
<tr>
    <td><a href="#delete_intermediate_table"><CopyableCode code="delete_intermediate_table" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-intermediate_table_identifier"><code>intermediate_table_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an intermediate table. The delete is idempotent. Only the intermediate table owner can call this operation.</td>
</tr>
<tr>
    <td><a href="#disallow_intermediate_table"><CopyableCode code="disallow_intermediate_table" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-intermediateTableName"><code>intermediateTableName</code></a></td>
    <td></td>
    <td>Marks an intermediate table as invalid when it references the caller's base table. The data provider (base table owner) calls this operation, not the intermediate table owner. By default, the operation also marks all descendant intermediate tables as invalid.</td>
</tr>
<tr>
    <td><a href="#populate_intermediate_table"><CopyableCode code="populate_intermediate_table" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-intermediate_table_identifier"><code>intermediate_table_identifier</code></a>, <a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Runs the stored query of an intermediate table and makes the results available for querying. Each call creates a new version. Use GetProtectedQuery with the returned analysis ID to track progress. Only the intermediate table owner can call this operation.</td>
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
<tr id="parameter-intermediate_table_identifier">
    <td><CopyableCode code="intermediate_table_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the intermediate table to populate.</td>
</tr>
<tr id="parameter-membership_identifier">
    <td><CopyableCode code="membership_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the membership that contains the intermediate table.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results that are returned for an API request call. The service chooses a default number if you don't set one. The service might return a nextToken even if the maxResults value has not been met.</td>
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
    defaultValue="get_intermediate_table"
    values={[
        { label: 'get_intermediate_table', value: 'get_intermediate_table' },
        { label: 'list_intermediate_tables', value: 'list_intermediate_tables' }
    ]}
>
<TabItem value="get_intermediate_table">

Retrieves an intermediate table. Returns the full details of the intermediate table, including schema, table dependencies, inherited constraints, child resources, and status. Only the intermediate table owner can call this operation.

```sql
SELECT
id,
name,
analysis_rule_types,
arn,
child_resources,
collaboration_arn,
collaboration_id,
create_time,
description,
intermediate_table_version,
kms_key_arn,
membership_arn,
membership_id,
population_analysis_configuration,
retention_in_days,
schema,
status,
status_reason,
table_dependencies,
update_time
FROM aws.cleanrooms.intermediate_tables
WHERE intermediate_table_identifier = '{{ intermediate_table_identifier }}' -- required
AND membership_identifier = '{{ membership_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_intermediate_tables">

Lists intermediate tables owned by the caller in a membership. We recommend using pagination to ensure that the operation returns quickly and successfully.

```sql
SELECT
id,
name,
analysis_rule_types,
arn,
collaboration_arn,
collaboration_id,
create_time,
description,
membership_arn,
membership_id,
retention_in_days,
status,
update_time
FROM aws.cleanrooms.intermediate_tables
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
    defaultValue="create_intermediate_table"
    values={[
        { label: 'create_intermediate_table', value: 'create_intermediate_table' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_intermediate_table">

Creates an intermediate table in a membership. The intermediate table is owned by the member with the CAN_QUERY ability. To populate the table with results, use PopulateIntermediateTable.

```sql
INSERT INTO aws.cleanrooms.intermediate_tables (
name,
description,
populationAnalysisConfiguration,
kmsKeyArn,
retentionInDays,
tags,
membership_identifier,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ populationAnalysisConfiguration }}' /* required */,
'{{ kmsKeyArn }}',
{{ retentionInDays }},
'{{ tags }}',
'{{ membership_identifier }}',
'{{ region }}'
RETURNING
intermediate_table
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: intermediate_tables
  props:
    - name: membership_identifier
      value: "{{ membership_identifier }}"
      description: Required parameter for the intermediate_tables resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the intermediate_tables resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: populationAnalysisConfiguration
      description: |
        Contains the configuration that defines the analysis used to populate an intermediate table.
      value:
        sqlParameters:
          queryString: "{{ queryString }}"
          analysisTemplateArn: "{{ analysisTemplateArn }}"
    - name: kmsKeyArn
      value: "{{ kmsKeyArn }}"
    - name: retentionInDays
      value: {{ retentionInDays }}
    - name: tags
      value: "{{ tags }}"
      description: |
        Map of tags assigned to a resource
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_intermediate_table"
    values={[
        { label: 'update_intermediate_table', value: 'update_intermediate_table' }
    ]}
>
<TabItem value="update_intermediate_table">

Updates an intermediate table. You can update the description, KMS key ARN, and column types of existing columns. Only the intermediate table owner can call this operation.

```sql
UPDATE aws.cleanrooms.intermediate_tables
SET 
description = '{{ description }}',
kmsKeyArn = '{{ kmsKeyArn }}',
columns = '{{ columns }}'
WHERE 
intermediate_table_identifier = '{{ intermediate_table_identifier }}' --required
AND membership_identifier = '{{ membership_identifier }}' --required
AND region = '{{ region }}' --required
RETURNING
intermediate_table;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_intermediate_table"
    values={[
        { label: 'delete_intermediate_table', value: 'delete_intermediate_table' }
    ]}
>
<TabItem value="delete_intermediate_table">

Deletes an intermediate table. The delete is idempotent. Only the intermediate table owner can call this operation.

```sql
DELETE FROM aws.cleanrooms.intermediate_tables
WHERE membership_identifier = '{{ membership_identifier }}' --required
AND intermediate_table_identifier = '{{ intermediate_table_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disallow_intermediate_table"
    values={[
        { label: 'disallow_intermediate_table', value: 'disallow_intermediate_table' },
        { label: 'populate_intermediate_table', value: 'populate_intermediate_table' }
    ]}
>
<TabItem value="disallow_intermediate_table">

Marks an intermediate table as invalid when it references the caller's base table. The data provider (base table owner) calls this operation, not the intermediate table owner. By default, the operation also marks all descendant intermediate tables as invalid.

```sql
EXEC aws.cleanrooms.intermediate_tables.disallow_intermediate_table 
@membership_identifier='{{ membership_identifier }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"intermediateTableName": "{{ intermediateTableName }}", 
"includeDescendants": {{ includeDescendants }}
}'
;
```
</TabItem>
<TabItem value="populate_intermediate_table">

Runs the stored query of an intermediate table and makes the results available for querying. Each call creates a new version. Use GetProtectedQuery with the returned analysis ID to track progress. Only the intermediate table owner can call this operation.

```sql
EXEC aws.cleanrooms.intermediate_tables.populate_intermediate_table 
@intermediate_table_identifier='{{ intermediate_table_identifier }}' --required, 
@membership_identifier='{{ membership_identifier }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"parameters": "{{ parameters }}", 
"computeConfiguration": "{{ computeConfiguration }}", 
"analysisPayerAccountId": "{{ analysisPayerAccountId }}"
}'
;
```
</TabItem>
</Tabs>
