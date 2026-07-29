--- 
title: traffic_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - traffic_policies
  - mailmanager
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

Creates, updates, deletes, gets or lists a <code>traffic_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="traffic_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mailmanager.traffic_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_traffic_policy"
    values={[
        { label: 'get_traffic_policy', value: 'get_traffic_policy' },
        { label: 'list_traffic_policies', value: 'list_traffic_policies' }
    ]}
>
<TabItem value="get_traffic_policy">

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
    <td><CopyableCode code="created_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the traffic policy was created.</td>
</tr>
<tr>
    <td><CopyableCode code="default_action" /></td>
    <td><code>string</code></td>
    <td>The default action of the traffic policy. (ALLOW, DENY)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the traffic policy was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="max_message_size_bytes" /></td>
    <td><code>integer</code></td>
    <td>The maximum message size in bytes of email which is allowed in by this traffic policy—anything larger will be blocked.</td>
</tr>
<tr>
    <td><CopyableCode code="policy_statements" /></td>
    <td><code>array</code></td>
    <td>The list of conditions which are in the traffic policy resource.</td>
</tr>
<tr>
    <td><CopyableCode code="traffic_policy_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the traffic policy resource.</td>
</tr>
<tr>
    <td><CopyableCode code="traffic_policy_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the traffic policy resource.</td>
</tr>
<tr>
    <td><CopyableCode code="traffic_policy_name" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name for the traffic policy resource. (pattern: &lt;code&gt;&#91;A-Za-z0-9_\-&#93;+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_traffic_policies">

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
    <td><CopyableCode code="default_action" /></td>
    <td><code>string</code></td>
    <td>Default action instructs the traﬃc policy to either Allow or Deny (block) messages that fall outside of (or not addressed by) the conditions of your policy statements (ALLOW, DENY)</td>
</tr>
<tr>
    <td><CopyableCode code="traffic_policy_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the traffic policy resource.</td>
</tr>
<tr>
    <td><CopyableCode code="traffic_policy_name" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name of the traffic policy resource. (pattern: &lt;code&gt;&#91;A-Za-z0-9_\-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_traffic_policy"><CopyableCode code="get_traffic_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Fetch attributes of a traffic policy resource.</td>
</tr>
<tr>
    <td><a href="#list_traffic_policies"><CopyableCode code="list_traffic_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List traffic policy resources.</td>
</tr>
<tr>
    <td><a href="#create_traffic_policy"><CopyableCode code="create_traffic_policy" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TrafficPolicyName"><code>TrafficPolicyName</code></a>, <a href="#parameter-PolicyStatements"><code>PolicyStatements</code></a>, <a href="#parameter-DefaultAction"><code>DefaultAction</code></a></td>
    <td></td>
    <td>Provision a new traffic policy resource.</td>
</tr>
<tr>
    <td><a href="#update_traffic_policy"><CopyableCode code="update_traffic_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TrafficPolicyId"><code>TrafficPolicyId</code></a></td>
    <td></td>
    <td>Update attributes of an already provisioned traffic policy resource.</td>
</tr>
<tr>
    <td><a href="#delete_traffic_policy"><CopyableCode code="delete_traffic_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a traffic policy resource.</td>
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
    defaultValue="get_traffic_policy"
    values={[
        { label: 'get_traffic_policy', value: 'get_traffic_policy' },
        { label: 'list_traffic_policies', value: 'list_traffic_policies' }
    ]}
>
<TabItem value="get_traffic_policy">

Fetch attributes of a traffic policy resource.

```sql
SELECT
created_timestamp,
default_action,
last_updated_timestamp,
max_message_size_bytes,
policy_statements,
traffic_policy_arn,
traffic_policy_id,
traffic_policy_name
FROM aws.mailmanager.traffic_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_traffic_policies">

List traffic policy resources.

```sql
SELECT
default_action,
traffic_policy_id,
traffic_policy_name
FROM aws.mailmanager.traffic_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_traffic_policy"
    values={[
        { label: 'create_traffic_policy', value: 'create_traffic_policy' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_traffic_policy">

Provision a new traffic policy resource.

```sql
INSERT INTO aws.mailmanager.traffic_policies (
ClientToken,
TrafficPolicyName,
PolicyStatements,
DefaultAction,
MaxMessageSizeBytes,
Tags,
region
)
SELECT 
'{{ ClientToken }}',
'{{ TrafficPolicyName }}' /* required */,
'{{ PolicyStatements }}' /* required */,
'{{ DefaultAction }}' /* required */,
{{ MaxMessageSizeBytes }},
'{{ Tags }}',
'{{ region }}'
RETURNING
traffic_policy_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: traffic_policies
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the traffic_policies resource.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        A unique token that Amazon SES uses to recognize subsequent retries of the same request.
    - name: TrafficPolicyName
      value: "{{ TrafficPolicyName }}"
      description: |
        A user-friendly name for the traffic policy resource.
    - name: PolicyStatements
      description: |
        Conditional statements for filtering email traffic.
      value:
        - Conditions: "{{ Conditions }}"
          Action: "{{ Action }}"
    - name: DefaultAction
      value: "{{ DefaultAction }}"
      description: |
        Default action instructs the traﬃc policy to either Allow or Deny (block) messages that fall outside of (or not addressed by) the conditions of your policy statements
      valid_values: ['ALLOW', 'DENY']
    - name: MaxMessageSizeBytes
      value: {{ MaxMessageSizeBytes }}
      description: |
        The maximum message size in bytes of email which is allowed in by this traffic policy—anything larger will be blocked.
    - name: Tags
      description: |
        The tags used to organize, track, or control access for the resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_traffic_policy"
    values={[
        { label: 'update_traffic_policy', value: 'update_traffic_policy' }
    ]}
>
<TabItem value="update_traffic_policy">

Update attributes of an already provisioned traffic policy resource.

```sql
UPDATE aws.mailmanager.traffic_policies
SET 
TrafficPolicyId = '{{ TrafficPolicyId }}',
TrafficPolicyName = '{{ TrafficPolicyName }}',
PolicyStatements = '{{ PolicyStatements }}',
DefaultAction = '{{ DefaultAction }}',
MaxMessageSizeBytes = {{ MaxMessageSizeBytes }}
WHERE 
region = '{{ region }}' --required
AND TrafficPolicyId = '{{ TrafficPolicyId }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_traffic_policy"
    values={[
        { label: 'delete_traffic_policy', value: 'delete_traffic_policy' }
    ]}
>
<TabItem value="delete_traffic_policy">

Delete a traffic policy resource.

```sql
DELETE FROM aws.mailmanager.traffic_policies
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
