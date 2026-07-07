--- 
title: log_patterns
hide_title: false
hide_table_of_contents: false
keywords:
  - log_patterns
  - application_insights
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

Creates, updates, deletes, gets or lists a <code>log_patterns</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="log_patterns" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.application_insights.log_patterns" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_log_pattern"
    values={[
        { label: 'describe_log_pattern', value: 'describe_log_pattern' },
        { label: 'list_log_patterns', value: 'list_log_patterns' }
    ]}
>
<TabItem value="describe_log_pattern">

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
    <td><CopyableCode code="AccountId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID for the resource group owner. (pattern: &lt;code&gt;^\d&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LogPattern" /></td>
    <td><code>object</code></td>
    <td>The successfully created log pattern.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the resource group. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\.\-_&#93;*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_log_patterns">

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
    <td><CopyableCode code="AccountId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID for the resource group owner. (pattern: &lt;code&gt;^\d&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LogPatterns" /></td>
    <td><code>array</code></td>
    <td>The list of log patterns.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token used to retrieve the next page of results. This value is null when there are no more results to return. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the resource group. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\.\-_&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#describe_log_pattern"><CopyableCode code="describe_log_pattern" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describe a specific log pattern from a LogPatternSet.</td>
</tr>
<tr>
    <td><a href="#list_log_patterns"><CopyableCode code="list_log_patterns" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the log patterns in the specific log LogPatternSet.</td>
</tr>
<tr>
    <td><a href="#create_log_pattern"><CopyableCode code="create_log_pattern" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceGroupName"><code>ResourceGroupName</code></a>, <a href="#parameter-PatternSetName"><code>PatternSetName</code></a>, <a href="#parameter-PatternName"><code>PatternName</code></a>, <a href="#parameter-Pattern"><code>Pattern</code></a>, <a href="#parameter-Rank"><code>Rank</code></a></td>
    <td></td>
    <td>Adds an log pattern to a LogPatternSet.</td>
</tr>
<tr>
    <td><a href="#update_log_pattern"><CopyableCode code="update_log_pattern" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceGroupName"><code>ResourceGroupName</code></a>, <a href="#parameter-PatternSetName"><code>PatternSetName</code></a>, <a href="#parameter-PatternName"><code>PatternName</code></a></td>
    <td></td>
    <td>Adds a log pattern to a LogPatternSet.</td>
</tr>
<tr>
    <td><a href="#delete_log_pattern"><CopyableCode code="delete_log_pattern" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes the specified log pattern from a LogPatternSet.</td>
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
    defaultValue="describe_log_pattern"
    values={[
        { label: 'describe_log_pattern', value: 'describe_log_pattern' },
        { label: 'list_log_patterns', value: 'list_log_patterns' }
    ]}
>
<TabItem value="describe_log_pattern">

Describe a specific log pattern from a LogPatternSet.

```sql
SELECT
AccountId,
LogPattern,
ResourceGroupName
FROM aws.application_insights.log_patterns
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_log_patterns">

Lists the log patterns in the specific log LogPatternSet.

```sql
SELECT
AccountId,
LogPatterns,
NextToken,
ResourceGroupName
FROM aws.application_insights.log_patterns
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_log_pattern"
    values={[
        { label: 'create_log_pattern', value: 'create_log_pattern' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_log_pattern">

Adds an log pattern to a LogPatternSet.

```sql
INSERT INTO aws.application_insights.log_patterns (
ResourceGroupName,
PatternSetName,
PatternName,
Pattern,
Rank,
region
)
SELECT 
'{{ ResourceGroupName }}' /* required */,
'{{ PatternSetName }}' /* required */,
'{{ PatternName }}' /* required */,
'{{ Pattern }}' /* required */,
{{ Rank }} /* required */,
'{{ region }}'
RETURNING
LogPattern,
ResourceGroupName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: log_patterns
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the log_patterns resource.
    - name: ResourceGroupName
      value: "{{ ResourceGroupName }}"
      description: |
        The name of the resource group.
    - name: PatternSetName
      value: "{{ PatternSetName }}"
      description: |
        The name of the log pattern set.
    - name: PatternName
      value: "{{ PatternName }}"
      description: |
        The name of the log pattern.
    - name: Pattern
      value: "{{ Pattern }}"
      description: |
        The log pattern. The pattern must be DFA compatible. Patterns that utilize forward lookahead or backreference constructions are not supported.
    - name: Rank
      value: {{ Rank }}
      description: |
        Rank of the log pattern. Must be a value between 1 and 1,000,000. The patterns are sorted by rank, so we recommend that you set your highest priority patterns with the lowest rank. A pattern of rank 1 will be the first to get matched to a log line. A pattern of rank 1,000,000 will be last to get matched. When you configure custom log patterns from the console, a Low severity pattern translates to a 750,000 rank. A Medium severity pattern translates to a 500,000 rank. And a High severity pattern translates to a 250,000 rank. Rank values less than 1 or greater than 1,000,000 are reserved for Amazon Web Services provided patterns.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_log_pattern"
    values={[
        { label: 'update_log_pattern', value: 'update_log_pattern' }
    ]}
>
<TabItem value="update_log_pattern">

Adds a log pattern to a LogPatternSet.

```sql
UPDATE aws.application_insights.log_patterns
SET 
ResourceGroupName = '{{ ResourceGroupName }}',
PatternSetName = '{{ PatternSetName }}',
PatternName = '{{ PatternName }}',
Pattern = '{{ Pattern }}',
Rank = {{ Rank }}
WHERE 
region = '{{ region }}' --required
AND ResourceGroupName = '{{ ResourceGroupName }}' --required
AND PatternSetName = '{{ PatternSetName }}' --required
AND PatternName = '{{ PatternName }}' --required
RETURNING
LogPattern,
ResourceGroupName;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_log_pattern"
    values={[
        { label: 'delete_log_pattern', value: 'delete_log_pattern' }
    ]}
>
<TabItem value="delete_log_pattern">

Removes the specified log pattern from a LogPatternSet.

```sql
DELETE FROM aws.application_insights.log_patterns
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
