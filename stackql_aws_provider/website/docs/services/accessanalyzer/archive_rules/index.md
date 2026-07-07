--- 
title: archive_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - archive_rules
  - accessanalyzer
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

Creates, updates, deletes, gets or lists an <code>archive_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="archive_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.accessanalyzer.archive_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_archive_rule"
    values={[
        { label: 'get_archive_rule', value: 'get_archive_rule' },
        { label: 'list_archive_rules', value: 'list_archive_rules' }
    ]}
>
<TabItem value="get_archive_rule">

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
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the archive rule was created.</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>object</code></td>
    <td>A filter used to define the archive rule.</td>
</tr>
<tr>
    <td><CopyableCode code="ruleName" /></td>
    <td><code>string</code></td>
    <td>The name of the archive rule. (pattern: &lt;code&gt;&#91;A-Za-z&#93;&#91;A-Za-z0-9_.-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the archive rule was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_archive_rules">

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
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the archive rule was created.</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>object</code></td>
    <td>A filter used to define the archive rule.</td>
</tr>
<tr>
    <td><CopyableCode code="ruleName" /></td>
    <td><code>string</code></td>
    <td>The name of the archive rule. (pattern: &lt;code&gt;&#91;A-Za-z&#93;&#91;A-Za-z0-9_.-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the archive rule was last updated.</td>
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
    <td><a href="#get_archive_rule"><CopyableCode code="get_archive_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-analyzer_name"><code>analyzer_name</code></a>, <a href="#parameter-rule_name"><code>rule_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about an archive rule. To learn about filter keys that you can use to create an archive rule, see IAM Access Analyzer filter keys in the IAM User Guide.</td>
</tr>
<tr>
    <td><a href="#list_archive_rules"><CopyableCode code="list_archive_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-analyzer_name"><code>analyzer_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Retrieves a list of archive rules created for the specified analyzer.</td>
</tr>
<tr>
    <td><a href="#create_archive_rule"><CopyableCode code="create_archive_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-analyzer_name"><code>analyzer_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ruleName"><code>ruleName</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td></td>
    <td>Creates an archive rule for the specified analyzer. Archive rules automatically archive new findings that meet the criteria you define when you create the rule. To learn about filter keys that you can use to create an archive rule, see IAM Access Analyzer filter keys in the IAM User Guide.</td>
</tr>
<tr>
    <td><a href="#update_archive_rule"><CopyableCode code="update_archive_rule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-analyzer_name"><code>analyzer_name</code></a>, <a href="#parameter-rule_name"><code>rule_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td></td>
    <td>Updates the criteria and values for the specified archive rule.</td>
</tr>
<tr>
    <td><a href="#delete_archive_rule"><CopyableCode code="delete_archive_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-analyzer_name"><code>analyzer_name</code></a>, <a href="#parameter-rule_name"><code>rule_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Deletes the specified archive rule.</td>
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
<tr id="parameter-analyzer_name">
    <td><CopyableCode code="analyzer_name" /></td>
    <td><code>string</code></td>
    <td>The name of the analyzer that associated with the archive rule to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-rule_name">
    <td><CopyableCode code="rule_name" /></td>
    <td><code>string</code></td>
    <td>The name of the rule to delete.</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A client token.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the request.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token used for pagination of results returned.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_archive_rule"
    values={[
        { label: 'get_archive_rule', value: 'get_archive_rule' },
        { label: 'list_archive_rules', value: 'list_archive_rules' }
    ]}
>
<TabItem value="get_archive_rule">

Retrieves information about an archive rule. To learn about filter keys that you can use to create an archive rule, see IAM Access Analyzer filter keys in the IAM User Guide.

```sql
SELECT
createdAt,
filter,
ruleName,
updatedAt
FROM aws.accessanalyzer.archive_rules
WHERE analyzer_name = '{{ analyzer_name }}' -- required
AND rule_name = '{{ rule_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_archive_rules">

Retrieves a list of archive rules created for the specified analyzer.

```sql
SELECT
createdAt,
filter,
ruleName,
updatedAt
FROM aws.accessanalyzer.archive_rules
WHERE analyzer_name = '{{ analyzer_name }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_archive_rule"
    values={[
        { label: 'create_archive_rule', value: 'create_archive_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_archive_rule">

Creates an archive rule for the specified analyzer. Archive rules automatically archive new findings that meet the criteria you define when you create the rule. To learn about filter keys that you can use to create an archive rule, see IAM Access Analyzer filter keys in the IAM User Guide.

```sql
INSERT INTO aws.accessanalyzer.archive_rules (
ruleName,
filter,
clientToken,
analyzer_name,
region
)
SELECT 
'{{ ruleName }}' /* required */,
'{{ filter }}' /* required */,
'{{ clientToken }}',
'{{ analyzer_name }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: archive_rules
  props:
    - name: analyzer_name
      value: "{{ analyzer_name }}"
      description: Required parameter for the archive_rules resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the archive_rules resource.
    - name: ruleName
      value: "{{ ruleName }}"
    - name: filter
      value: "{{ filter }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_archive_rule"
    values={[
        { label: 'update_archive_rule', value: 'update_archive_rule' }
    ]}
>
<TabItem value="update_archive_rule">

Updates the criteria and values for the specified archive rule.

```sql
UPDATE aws.accessanalyzer.archive_rules
SET 
filter = '{{ filter }}',
clientToken = '{{ clientToken }}'
WHERE 
analyzer_name = '{{ analyzer_name }}' --required
AND rule_name = '{{ rule_name }}' --required
AND region = '{{ region }}' --required
AND filter = '{{ filter }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_archive_rule"
    values={[
        { label: 'delete_archive_rule', value: 'delete_archive_rule' }
    ]}
>
<TabItem value="delete_archive_rule">

Deletes the specified archive rule.

```sql
DELETE FROM aws.accessanalyzer.archive_rules
WHERE analyzer_name = '{{ analyzer_name }}' --required
AND rule_name = '{{ rule_name }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
;
```
</TabItem>
</Tabs>
