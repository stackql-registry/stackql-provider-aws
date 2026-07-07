--- 
title: configured_tables
hide_title: false
hide_table_of_contents: false
keywords:
  - configured_tables
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

Creates, updates, deletes, gets or lists a <code>configured_tables</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="configured_tables" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cleanrooms.configured_tables" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_configured_table"
    values={[
        { label: 'get_configured_table', value: 'get_configured_table' },
        { label: 'list_configured_tables', value: 'list_configured_tables' }
    ]}
>
<TabItem value="get_configured_table">

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
    <td>The unique ID for the configured table. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A name for the configured table. (pattern: &lt;code&gt;(?!\s*$)&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="allowedColumns" /></td>
    <td><code>array</code></td>
    <td>The columns within the underlying Glue table that can be used within collaborations.</td>
</tr>
<tr>
    <td><CopyableCode code="analysisMethod" /></td>
    <td><code>string</code></td>
    <td>The analysis method for the configured table. DIRECT_QUERY allows SQL queries to be run directly on this table. DIRECT_JOB allows PySpark jobs to be run directly on this table. MULTIPLE allows both SQL queries and PySpark jobs to be run directly on this table. (DIRECT_QUERY, DIRECT_JOB, MULTIPLE)</td>
</tr>
<tr>
    <td><CopyableCode code="analysisRuleTypes" /></td>
    <td><code>array</code></td>
    <td>The types of analysis rules associated with this configured table. Currently, only one analysis rule may be associated with a configured table.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The unique ARN for the configured table. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:configuredtable/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the configured table was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description for the configured table. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="selectedAnalysisMethods" /></td>
    <td><code>array</code></td>
    <td>The selected analysis methods for the configured table.</td>
</tr>
<tr>
    <td><CopyableCode code="tableReference" /></td>
    <td><code>object</code></td>
    <td>A pointer to the dataset that underlies this table.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the configured table was last updated</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_configured_tables">

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
    <td>The unique ID of the configured table. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the configured table. (pattern: &lt;code&gt;(?!\s*$)&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="analysisMethod" /></td>
    <td><code>string</code></td>
    <td>The analysis method for the configured tables. DIRECT_QUERY allows SQL queries to be run directly on this table. DIRECT_JOB allows PySpark jobs to be run directly on this table. MULTIPLE allows both SQL queries and PySpark jobs to be run directly on this table. (DIRECT_QUERY, DIRECT_JOB, MULTIPLE)</td>
</tr>
<tr>
    <td><CopyableCode code="analysisRuleTypes" /></td>
    <td><code>array</code></td>
    <td>The types of analysis rules associated with this configured table.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The unique ARN of the configured table. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:configuredtable/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the configured table was created.</td>
</tr>
<tr>
    <td><CopyableCode code="selectedAnalysisMethods" /></td>
    <td><code>array</code></td>
    <td>The selected analysis methods for the configured table summary.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the configured table was last updated.</td>
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
    <td><a href="#get_configured_table"><CopyableCode code="get_configured_table" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-configured_table_identifier"><code>configured_table_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a configured table.</td>
</tr>
<tr>
    <td><a href="#list_configured_tables"><CopyableCode code="list_configured_tables" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists configured tables.</td>
</tr>
<tr>
    <td><a href="#create_configured_table"><CopyableCode code="create_configured_table" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-tableReference"><code>tableReference</code></a>, <a href="#parameter-allowedColumns"><code>allowedColumns</code></a>, <a href="#parameter-analysisMethod"><code>analysisMethod</code></a></td>
    <td></td>
    <td>Creates a new configured table resource.</td>
</tr>
<tr>
    <td><a href="#update_configured_table"><CopyableCode code="update_configured_table" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-configured_table_identifier"><code>configured_table_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a configured table.</td>
</tr>
<tr>
    <td><a href="#delete_configured_table"><CopyableCode code="delete_configured_table" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-configured_table_identifier"><code>configured_table_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a configured table.</td>
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
<tr id="parameter-configured_table_identifier">
    <td><CopyableCode code="configured_table_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique ID for the configured table to delete.</td>
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
    defaultValue="get_configured_table"
    values={[
        { label: 'get_configured_table', value: 'get_configured_table' },
        { label: 'list_configured_tables', value: 'list_configured_tables' }
    ]}
>
<TabItem value="get_configured_table">

Retrieves a configured table.

```sql
SELECT
id,
name,
allowedColumns,
analysisMethod,
analysisRuleTypes,
arn,
createTime,
description,
selectedAnalysisMethods,
tableReference,
updateTime
FROM aws.cleanrooms.configured_tables
WHERE configured_table_identifier = '{{ configured_table_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_configured_tables">

Lists configured tables.

```sql
SELECT
id,
name,
analysisMethod,
analysisRuleTypes,
arn,
createTime,
selectedAnalysisMethods,
updateTime
FROM aws.cleanrooms.configured_tables
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_configured_table"
    values={[
        { label: 'create_configured_table', value: 'create_configured_table' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_configured_table">

Creates a new configured table resource.

```sql
INSERT INTO aws.cleanrooms.configured_tables (
name,
description,
tableReference,
allowedColumns,
analysisMethod,
selectedAnalysisMethods,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ tableReference }}' /* required */,
'{{ allowedColumns }}' /* required */,
'{{ analysisMethod }}' /* required */,
'{{ selectedAnalysisMethods }}',
'{{ tags }}',
'{{ region }}'
RETURNING
configuredTable
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: configured_tables
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the configured_tables resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: tableReference
      description: |
        A pointer to the dataset that underlies this table.
      value:
        glue:
          region: "{{ region }}"
          tableName: "{{ tableName }}"
          databaseName: "{{ databaseName }}"
        snowflake:
          secretArn: "{{ secretArn }}"
          accountIdentifier: "{{ accountIdentifier }}"
          databaseName: "{{ databaseName }}"
          tableName: "{{ tableName }}"
          schemaName: "{{ schemaName }}"
          tableSchema:
            v1:
              - columnName: "{{ columnName }}"
                columnType: "{{ columnType }}"
        athena:
          region: "{{ region }}"
          workGroup: "{{ workGroup }}"
          outputLocation: "{{ outputLocation }}"
          databaseName: "{{ databaseName }}"
          tableName: "{{ tableName }}"
          catalogName: "{{ catalogName }}"
    - name: allowedColumns
      value:
        - "{{ allowedColumns }}"
    - name: analysisMethod
      value: "{{ analysisMethod }}"
      valid_values: ['DIRECT_QUERY', 'DIRECT_JOB', 'MULTIPLE']
    - name: selectedAnalysisMethods
      value:
        - "{{ selectedAnalysisMethods }}"
    - name: tags
      value: "{{ tags }}"
      description: |
        Map of tags assigned to a resource
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_configured_table"
    values={[
        { label: 'update_configured_table', value: 'update_configured_table' }
    ]}
>
<TabItem value="update_configured_table">

Updates a configured table.

```sql
UPDATE aws.cleanrooms.configured_tables
SET 
name = '{{ name }}',
description = '{{ description }}',
tableReference = '{{ tableReference }}',
allowedColumns = '{{ allowedColumns }}',
analysisMethod = '{{ analysisMethod }}',
selectedAnalysisMethods = '{{ selectedAnalysisMethods }}'
WHERE 
configured_table_identifier = '{{ configured_table_identifier }}' --required
AND region = '{{ region }}' --required
RETURNING
configuredTable;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_configured_table"
    values={[
        { label: 'delete_configured_table', value: 'delete_configured_table' }
    ]}
>
<TabItem value="delete_configured_table">

Deletes a configured table.

```sql
DELETE FROM aws.cleanrooms.configured_tables
WHERE configured_table_identifier = '{{ configured_table_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
