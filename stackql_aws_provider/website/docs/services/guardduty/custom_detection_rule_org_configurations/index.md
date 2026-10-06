--- 
title: custom_detection_rule_org_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_detection_rule_org_configurations
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

Creates, updates, deletes, gets or lists a <code>custom_detection_rule_org_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="custom_detection_rule_org_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.guardduty.custom_detection_rule_org_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_custom_detection_rule_org_configuration"
    values={[
        { label: 'get_custom_detection_rule_org_configuration', value: 'get_custom_detection_rule_org_configuration' },
        { label: 'list_custom_detection_rule_org_configurations', value: 'list_custom_detection_rule_org_configurations' }
    ]}
>
<TabItem value="get_custom_detection_rule_org_configuration">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the organization configuration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="exclude_account_ids" /></td>
    <td><code>array</code></td>
    <td>A list of member account IDs excluded from the organization configuration. Mutually exclusive with IncludeAccountIds.</td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the organization configuration expires.</td>
</tr>
<tr>
    <td><CopyableCode code="include_account_ids" /></td>
    <td><code>array</code></td>
    <td>A list of member account IDs included in the organization configuration. Mutually exclusive with ExcludeAccountIds.</td>
</tr>
<tr>
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>The execution mode of the organization configuration. Valid values: LIVE | DRY_RUN. (LIVE, DRY_RUN)</td>
</tr>
<tr>
    <td><CopyableCode code="rule_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the custom detection rule. (pattern: &lt;code&gt;&#91;a-z0-9&#93;+(-&#91;a-z0-9&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The configuration status. Valid values: ACTIVE | PROCESSING | FAILED. (ACTIVE, PROCESSING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for the current configuration status.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the organization configuration was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_custom_detection_rule_org_configurations">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the organization configuration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the organization configuration expires.</td>
</tr>
<tr>
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>The rule execution mode. (LIVE, DRY_RUN)</td>
</tr>
<tr>
    <td><CopyableCode code="rule_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the custom detection rule. (pattern: &lt;code&gt;&#91;a-z0-9&#93;+(-&#91;a-z0-9&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The configuration status. (ACTIVE, PROCESSING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for the current configuration status.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the organization configuration was last updated.</td>
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
    <td><a href="#get_custom_detection_rule_org_configuration"><CopyableCode code="get_custom_detection_rule_org_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-rule_id"><code>rule_id</code></a>, <a href="#parameter-mode"><code>mode</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the organization-level configuration for a custom detection rule.</td>
</tr>
<tr>
    <td><a href="#list_custom_detection_rule_org_configurations"><CopyableCode code="list_custom_detection_rule_org_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td>Returns all organization-level configurations for custom detection rules. You can filter the results by status.</td>
</tr>
<tr>
    <td><a href="#create_custom_detection_rule_org_configuration"><CopyableCode code="create_custom_detection_rule_org_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RuleId"><code>RuleId</code></a></td>
    <td></td>
    <td>Creates an organization-level configuration that enables a custom detection rule across your organization. This operation is available only to the delegated administrator account.</td>
</tr>
<tr>
    <td><a href="#update_custom_detection_rule_org_configuration"><CopyableCode code="update_custom_detection_rule_org_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-rule_id"><code>rule_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the organization-level configuration for a custom detection rule, including the mode and include/exclude account lists.</td>
</tr>
<tr>
    <td><a href="#delete_custom_detection_rule_org_configuration"><CopyableCode code="delete_custom_detection_rule_org_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-rule_id"><code>rule_id</code></a>, <a href="#parameter-mode"><code>mode</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the organization-level configuration for a custom detection rule. This operation is available only to the delegated administrator account.</td>
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
<tr id="parameter-mode">
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>The execution mode of the organization configuration to delete. Valid values: LIVE | DRY_RUN.</td>
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
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token from a previous response. Use this token to retrieve the next page of results.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The configuration status to filter by.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_custom_detection_rule_org_configuration"
    values={[
        { label: 'get_custom_detection_rule_org_configuration', value: 'get_custom_detection_rule_org_configuration' },
        { label: 'list_custom_detection_rule_org_configurations', value: 'list_custom_detection_rule_org_configurations' }
    ]}
>
<TabItem value="get_custom_detection_rule_org_configuration">

Returns the organization-level configuration for a custom detection rule.

```sql
SELECT
created_at,
exclude_account_ids,
expires_at,
include_account_ids,
mode,
rule_id,
status,
status_reason,
updated_at
FROM aws.guardduty.custom_detection_rule_org_configurations
WHERE rule_id = '{{ rule_id }}' -- required
AND mode = '{{ mode }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_custom_detection_rule_org_configurations">

Returns all organization-level configurations for custom detection rules. You can filter the results by status.

```sql
SELECT
created_at,
expires_at,
mode,
rule_id,
status,
status_reason,
updated_at
FROM aws.guardduty.custom_detection_rule_org_configurations
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND status = '{{ status }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_custom_detection_rule_org_configuration"
    values={[
        { label: 'create_custom_detection_rule_org_configuration', value: 'create_custom_detection_rule_org_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_custom_detection_rule_org_configuration">

Creates an organization-level configuration that enables a custom detection rule across your organization. This operation is available only to the delegated administrator account.

```sql
INSERT INTO aws.guardduty.custom_detection_rule_org_configurations (
RuleId,
Mode,
IncludeAccountIds,
ExcludeAccountIds,
ClientToken,
region
)
SELECT 
'{{ RuleId }}' /* required */,
'{{ Mode }}',
'{{ IncludeAccountIds }}',
'{{ ExcludeAccountIds }}',
'{{ ClientToken }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: custom_detection_rule_org_configurations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the custom_detection_rule_org_configurations resource.
    - name: RuleId
      value: "{{ RuleId }}"
    - name: Mode
      value: "{{ Mode }}"
      valid_values: ['LIVE', 'DRY_RUN']
    - name: IncludeAccountIds
      value:
        - "{{ IncludeAccountIds }}"
    - name: ExcludeAccountIds
      value:
        - "{{ ExcludeAccountIds }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_custom_detection_rule_org_configuration"
    values={[
        { label: 'update_custom_detection_rule_org_configuration', value: 'update_custom_detection_rule_org_configuration' }
    ]}
>
<TabItem value="update_custom_detection_rule_org_configuration">

Updates the organization-level configuration for a custom detection rule, including the mode and include/exclude account lists.

```sql
UPDATE aws.guardduty.custom_detection_rule_org_configurations
SET 
Mode = '{{ Mode }}',
IncludeAccountIds = '{{ IncludeAccountIds }}',
ExcludeAccountIds = '{{ ExcludeAccountIds }}'
WHERE 
rule_id = '{{ rule_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_custom_detection_rule_org_configuration"
    values={[
        { label: 'delete_custom_detection_rule_org_configuration', value: 'delete_custom_detection_rule_org_configuration' }
    ]}
>
<TabItem value="delete_custom_detection_rule_org_configuration">

Deletes the organization-level configuration for a custom detection rule. This operation is available only to the delegated administrator account.

```sql
DELETE FROM aws.guardduty.custom_detection_rule_org_configurations
WHERE rule_id = '{{ rule_id }}' --required
AND mode = '{{ mode }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
