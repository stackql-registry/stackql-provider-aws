--- 
title: custom_detection_rule_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_detection_rule_associations
  - guardduty
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

Creates, updates, deletes, gets or lists a <code>custom_detection_rule_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="custom_detection_rule_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.guardduty.custom_detection_rule_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_custom_detection_rule_association"
    values={[
        { label: 'get_custom_detection_rule_association', value: 'get_custom_detection_rule_association' },
        { label: 'list_custom_detection_rule_associations', value: 'list_custom_detection_rule_associations' }
    ]}
>
<TabItem value="get_custom_detection_rule_association">

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
    <td><CopyableCode code="rule_association" /></td>
    <td><code>object</code></td>
    <td>The details of the custom detection rule association.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags associated with the custom detection rule association resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_custom_detection_rule_associations">

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
    <td>The Amazon Resource Name (ARN) of the association. (pattern: &lt;code&gt;arn:&#91;a-zA-Z0-9\-&#93;+:&#91;a-zA-Z0-9\-&#93;+:&#91;a-zA-Z0-9\-&#93;*:(&#91;0-9&#93;*|aws):.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="association_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the association. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the association was created.</td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the association expires.</td>
</tr>
<tr>
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>The rule execution mode. Valid values: LIVE | DRY_RUN. (LIVE, DRY_RUN)</td>
</tr>
<tr>
    <td><CopyableCode code="rule_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the custom detection rule. (pattern: &lt;code&gt;&#91;a-z0-9&#93;+(-&#91;a-z0-9&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the association was last updated.</td>
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
    <td><a href="#get_custom_detection_rule_association"><CopyableCode code="get_custom_detection_rule_association" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-rule_id"><code>rule_id</code></a>, <a href="#parameter-association_id"><code>association_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns details for a custom detection rule association.</td>
</tr>
<tr>
    <td><a href="#list_custom_detection_rule_associations"><CopyableCode code="list_custom_detection_rule_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-ruleId"><code>ruleId</code></a>, <a href="#parameter-mode"><code>mode</code></a></td>
    <td>Returns all custom detection rule associations for your account. You can filter by rule ID and mode.</td>
</tr>
<tr>
    <td><a href="#create_custom_detection_rule_association"><CopyableCode code="create_custom_detection_rule_association" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RuleId"><code>RuleId</code></a></td>
    <td></td>
    <td>Enables a custom detection rule for your account by creating an association. You specify the rule and the mode in which it operates.</td>
</tr>
<tr>
    <td><a href="#update_custom_detection_rule_association"><CopyableCode code="update_custom_detection_rule_association" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-rule_id"><code>rule_id</code></a>, <a href="#parameter-association_id"><code>association_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the mode of an existing custom detection rule association.</td>
</tr>
<tr>
    <td><a href="#delete_custom_detection_rule_association"><CopyableCode code="delete_custom_detection_rule_association" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-rule_id"><code>rule_id</code></a>, <a href="#parameter-association_id"><code>association_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disables a custom detection rule by deleting its association. This operation is idempotent.</td>
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
<tr id="parameter-association_id">
    <td><CopyableCode code="association_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the association to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-rule_id">
    <td><CopyableCode code="rule_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the custom detection rule.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single page. Minimum value of 1, maximum value of 100.</td>
</tr>
<tr id="parameter-mode">
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>The rule execution mode to filter associations by.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token from a previous response. Use this token to retrieve the next page of results.</td>
</tr>
<tr id="parameter-ruleId">
    <td><CopyableCode code="ruleId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the custom detection rule to filter associations by.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_custom_detection_rule_association"
    values={[
        { label: 'get_custom_detection_rule_association', value: 'get_custom_detection_rule_association' },
        { label: 'list_custom_detection_rule_associations', value: 'list_custom_detection_rule_associations' }
    ]}
>
<TabItem value="get_custom_detection_rule_association">

Returns details for a custom detection rule association.

```sql
SELECT
rule_association,
tags
FROM aws.guardduty.custom_detection_rule_associations
WHERE rule_id = '{{ rule_id }}' -- required
AND association_id = '{{ association_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_custom_detection_rule_associations">

Returns all custom detection rule associations for your account. You can filter by rule ID and mode.

```sql
SELECT
arn,
association_id,
created_at,
expires_at,
mode,
rule_id,
updated_at
FROM aws.guardduty.custom_detection_rule_associations
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND ruleId = '{{ ruleId }}'
AND mode = '{{ mode }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_custom_detection_rule_association"
    values={[
        { label: 'create_custom_detection_rule_association', value: 'create_custom_detection_rule_association' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_custom_detection_rule_association">

Enables a custom detection rule for your account by creating an association. You specify the rule and the mode in which it operates.

```sql
INSERT INTO aws.guardduty.custom_detection_rule_associations (
RuleId,
Mode,
ClientToken,
Tags,
region
)
SELECT 
'{{ RuleId }}' /* required */,
'{{ Mode }}',
'{{ ClientToken }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
rule_association
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: custom_detection_rule_associations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the custom_detection_rule_associations resource.
    - name: RuleId
      value: "{{ RuleId }}"
    - name: Mode
      value: "{{ Mode }}"
      valid_values: ['LIVE', 'DRY_RUN']
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_custom_detection_rule_association"
    values={[
        { label: 'update_custom_detection_rule_association', value: 'update_custom_detection_rule_association' }
    ]}
>
<TabItem value="update_custom_detection_rule_association">

Updates the mode of an existing custom detection rule association.

```sql
UPDATE aws.guardduty.custom_detection_rule_associations
SET 
Mode = '{{ Mode }}'
WHERE 
rule_id = '{{ rule_id }}' --required
AND association_id = '{{ association_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_custom_detection_rule_association"
    values={[
        { label: 'delete_custom_detection_rule_association', value: 'delete_custom_detection_rule_association' }
    ]}
>
<TabItem value="delete_custom_detection_rule_association">

Disables a custom detection rule by deleting its association. This operation is idempotent.

```sql
DELETE FROM aws.guardduty.custom_detection_rule_associations
WHERE rule_id = '{{ rule_id }}' --required
AND association_id = '{{ association_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
