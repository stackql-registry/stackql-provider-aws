--- 
title: sip_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - sip_rules
  - chime_sdk_voice
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

Creates, updates, deletes, gets or lists a <code>sip_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sip_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime_sdk_voice.sip_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_sip_rule"
    values={[
        { label: 'get_sip_rule', value: 'get_sip_rule' },
        { label: 'list_sip_rules', value: 'list_sip_rules' }
    ]}
>
<TabItem value="get_sip_rule">

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
    <td>The time at which the SIP rule was created, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the SIP rule is enabled or disabled. You must disable a rule before you can delete it.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A SIP rule's name. (pattern: &lt;code&gt;&#91;a-zA-Z0-9 _.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sip_rule_id" /></td>
    <td><code>string</code></td>
    <td>A SIP rule's ID. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="target_applications" /></td>
    <td><code>array</code></td>
    <td>The target SIP media application and other details, such as priority and AWS Region, to be specified in the SIP rule. Only one SIP rule per AWS Region can be provided.</td>
</tr>
<tr>
    <td><CopyableCode code="trigger_type" /></td>
    <td><code>string</code></td>
    <td>The type of trigger set for a SIP rule, either a phone number or a URI request host name. (ToPhoneNumber, RequestUriHostname)</td>
</tr>
<tr>
    <td><CopyableCode code="trigger_value" /></td>
    <td><code>string</code></td>
    <td>The value set for a SIP rule's trigger type. Either a phone number or a URI hostname. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the SIP rule was updated, in ISO 8601 format.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_sip_rules">

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
    <td>The time at which the SIP rule was created, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the SIP rule is enabled or disabled. You must disable a rule before you can delete it.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A SIP rule's name. (pattern: &lt;code&gt;&#91;a-zA-Z0-9 _.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sip_rule_id" /></td>
    <td><code>string</code></td>
    <td>A SIP rule's ID. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="target_applications" /></td>
    <td><code>array</code></td>
    <td>The target SIP media application and other details, such as priority and AWS Region, to be specified in the SIP rule. Only one SIP rule per AWS Region can be provided.</td>
</tr>
<tr>
    <td><CopyableCode code="trigger_type" /></td>
    <td><code>string</code></td>
    <td>The type of trigger set for a SIP rule, either a phone number or a URI request host name. (ToPhoneNumber, RequestUriHostname)</td>
</tr>
<tr>
    <td><CopyableCode code="trigger_value" /></td>
    <td><code>string</code></td>
    <td>The value set for a SIP rule's trigger type. Either a phone number or a URI hostname. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the SIP rule was updated, in ISO 8601 format.</td>
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
    <td><a href="#get_sip_rule"><CopyableCode code="get_sip_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-sip_rule_id"><code>sip_rule_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the details of a SIP rule, such as the rule ID, name, triggers, and target endpoints.</td>
</tr>
<tr>
    <td><a href="#list_sip_rules"><CopyableCode code="list_sip_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-sip-media-application"><code>sip-media-application</code></a>, <a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a></td>
    <td>Lists the SIP rules under the administrator's AWS account.</td>
</tr>
<tr>
    <td><a href="#create_sip_rule"><CopyableCode code="create_sip_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TriggerType"><code>TriggerType</code></a>, <a href="#parameter-TriggerValue"><code>TriggerValue</code></a>, <a href="#parameter-TargetApplications"><code>TargetApplications</code></a></td>
    <td></td>
    <td>Creates a SIP rule, which can be used to run a SIP media application as a target for a specific trigger type. For more information about SIP rules, see Managing SIP media applications and rules in the Amazon Chime SDK Administrator Guide.</td>
</tr>
<tr>
    <td><a href="#update_sip_rule"><CopyableCode code="update_sip_rule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-sip_rule_id"><code>sip_rule_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the details of the specified SIP rule.</td>
</tr>
<tr>
    <td><a href="#delete_sip_rule"><CopyableCode code="delete_sip_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-sip_rule_id"><code>sip_rule_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a SIP rule.</td>
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
<tr id="parameter-sip_rule_id">
    <td><CopyableCode code="sip_rule_id" /></td>
    <td><code>string</code></td>
    <td>The SIP rule ID.</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call. Defaults to 100.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token used to return the next page of results.</td>
</tr>
<tr id="parameter-sip-media-application">
    <td><CopyableCode code="sip-media-application" /></td>
    <td><code>string</code></td>
    <td>The SIP media application ID.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_sip_rule"
    values={[
        { label: 'get_sip_rule', value: 'get_sip_rule' },
        { label: 'list_sip_rules', value: 'list_sip_rules' }
    ]}
>
<TabItem value="get_sip_rule">

Retrieves the details of a SIP rule, such as the rule ID, name, triggers, and target endpoints.

```sql
SELECT
created_timestamp,
disabled,
name,
sip_rule_id,
target_applications,
trigger_type,
trigger_value,
updated_timestamp
FROM aws.chime_sdk_voice.sip_rules
WHERE sip_rule_id = '{{ sip_rule_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_sip_rules">

Lists the SIP rules under the administrator's AWS account.

```sql
SELECT
created_timestamp,
disabled,
name,
sip_rule_id,
target_applications,
trigger_type,
trigger_value,
updated_timestamp
FROM aws.chime_sdk_voice.sip_rules
WHERE region = '{{ region }}' -- required
AND `sip-media-application` = '{{ sip-media-application }}'
AND `max-results` = '{{ max-results }}'
AND `next-token` = '{{ next-token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_sip_rule"
    values={[
        { label: 'create_sip_rule', value: 'create_sip_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_sip_rule">

Creates a SIP rule, which can be used to run a SIP media application as a target for a specific trigger type. For more information about SIP rules, see Managing SIP media applications and rules in the Amazon Chime SDK Administrator Guide.

```sql
INSERT INTO aws.chime_sdk_voice.sip_rules (
Name,
TriggerType,
TriggerValue,
Disabled,
TargetApplications,
region
)
SELECT 
'{{ Name }}',
'{{ TriggerType }}' /* required */,
'{{ TriggerValue }}' /* required */,
{{ Disabled }},
'{{ TargetApplications }}' /* required */,
'{{ region }}'
RETURNING
sip_rule
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: sip_rules
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the sip_rules resource.
    - name: Name
      value: "{{ Name }}"
    - name: TriggerType
      value: "{{ TriggerType }}"
      valid_values: ['ToPhoneNumber', 'RequestUriHostname']
    - name: TriggerValue
      value: "{{ TriggerValue }}"
    - name: Disabled
      value: {{ Disabled }}
    - name: TargetApplications
      value:
        - SipMediaApplicationId: "{{ SipMediaApplicationId }}"
          Priority: {{ Priority }}
          AwsRegion: "{{ AwsRegion }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_sip_rule"
    values={[
        { label: 'update_sip_rule', value: 'update_sip_rule' }
    ]}
>
<TabItem value="update_sip_rule">

Updates the details of the specified SIP rule.

```sql
UPDATE aws.chime_sdk_voice.sip_rules
SET 
Name = '{{ Name }}',
Disabled = {{ Disabled }},
TargetApplications = '{{ TargetApplications }}'
WHERE 
sip_rule_id = '{{ sip_rule_id }}' --required
AND region = '{{ region }}' --required
RETURNING
sip_rule;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_sip_rule"
    values={[
        { label: 'delete_sip_rule', value: 'delete_sip_rule' }
    ]}
>
<TabItem value="delete_sip_rule">

Deletes a SIP rule.

```sql
DELETE FROM aws.chime_sdk_voice.sip_rules
WHERE sip_rule_id = '{{ sip_rule_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
