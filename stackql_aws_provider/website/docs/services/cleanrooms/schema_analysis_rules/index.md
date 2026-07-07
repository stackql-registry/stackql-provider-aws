--- 
title: schema_analysis_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - schema_analysis_rules
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

Creates, updates, deletes, gets or lists a <code>schema_analysis_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="schema_analysis_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cleanrooms.schema_analysis_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_schema_analysis_rule"
    values={[
        { label: 'get_schema_analysis_rule', value: 'get_schema_analysis_rule' },
        { label: 'batch_get_schema_analysis_rule', value: 'batch_get_schema_analysis_rule' }
    ]}
>
<TabItem value="get_schema_analysis_rule">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name for the analysis rule. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_&#93;((&#91;a-zA-Z0-9_ &#93;+-)*(&#91;a-zA-Z0-9_ &#93;+))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaborationId" /></td>
    <td><code>string</code></td>
    <td>The unique ID for the associated collaboration. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaborationPolicy" /></td>
    <td><code>object</code></td>
    <td>Controls on the query specifications that can be run on an associated configured table.</td>
</tr>
<tr>
    <td><CopyableCode code="consolidatedPolicy" /></td>
    <td><code>object</code></td>
    <td>The consolidated policy for the analysis rule.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the analysis rule was created.</td>
</tr>
<tr>
    <td><CopyableCode code="policy" /></td>
    <td><code>object</code></td>
    <td>A policy that describes the associated data usage limitations.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of analysis rule. (AGGREGATION, LIST, CUSTOM, ID_MAPPING_TABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the analysis rule was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="batch_get_schema_analysis_rule">

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
    <td><CopyableCode code="analysisRules" /></td>
    <td><code>array</code></td>
    <td>The retrieved list of analysis rules.</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Error reasons for schemas that could not be retrieved. One error is returned for every schema that could not be retrieved.</td>
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
    <td><a href="#get_schema_analysis_rule"><CopyableCode code="get_schema_analysis_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-collaboration_identifier"><code>collaboration_identifier</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a schema analysis rule.</td>
</tr>
<tr>
    <td><a href="#batch_get_schema_analysis_rule"><CopyableCode code="batch_get_schema_analysis_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-collaboration_identifier"><code>collaboration_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves multiple analysis rule schemas.</td>
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
<tr id="parameter-collaboration_identifier">
    <td><CopyableCode code="collaboration_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the collaboration that contains the schema analysis rule.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the schema to retrieve the analysis rule for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the schema analysis rule to retrieve. Schema analysis rules are uniquely identified by a combination of the collaboration, the schema name, and their type.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_schema_analysis_rule"
    values={[
        { label: 'get_schema_analysis_rule', value: 'get_schema_analysis_rule' },
        { label: 'batch_get_schema_analysis_rule', value: 'batch_get_schema_analysis_rule' }
    ]}
>
<TabItem value="get_schema_analysis_rule">

Retrieves a schema analysis rule.

```sql
SELECT
name,
collaborationId,
collaborationPolicy,
consolidatedPolicy,
createTime,
policy,
type_,
updateTime
FROM aws.cleanrooms.schema_analysis_rules
WHERE collaboration_identifier = '{{ collaboration_identifier }}' -- required
AND name = '{{ name }}' -- required
AND type = '{{ type }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="batch_get_schema_analysis_rule">

Retrieves multiple analysis rule schemas.

```sql
SELECT
analysisRules,
errors
FROM aws.cleanrooms.schema_analysis_rules
WHERE collaboration_identifier = '{{ collaboration_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
