--- 
title: protect_configuration_rule_set_number_overrides
hide_title: false
hide_table_of_contents: false
keywords:
  - protect_configuration_rule_set_number_overrides
  - pinpoint_sms_voice_v2
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

Creates, updates, deletes, gets or lists a <code>protect_configuration_rule_set_number_overrides</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="protect_configuration_rule_set_number_overrides" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint_sms_voice_v2.protect_configuration_rule_set_number_overrides" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_protect_configuration_rule_set_number_overrides"
    values={[
        { label: 'list_protect_configuration_rule_set_number_overrides', value: 'list_protect_configuration_rule_set_number_overrides' }
    ]}
>
<TabItem value="list_protect_configuration_rule_set_number_overrides">

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
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>The action for the rule to perform of either blocking or allowing messages to the destination phone number. (ALLOW, BLOCK)</td>
</tr>
<tr>
    <td><CopyableCode code="created_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the rule was created, in UNIX epoch time format.</td>
</tr>
<tr>
    <td><CopyableCode code="destination_phone_number" /></td>
    <td><code>string</code></td>
    <td>The destination phone number in E.164 format. (pattern: &lt;code&gt;\+?&#91;1-9&#93;&#91;0-9&#93;&#123;1,18&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="expiration_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the rule will expire at. If ExpirationTimestamp is not set then the rule will not expire.</td>
</tr>
<tr>
    <td><CopyableCode code="iso_country_code" /></td>
    <td><code>string</code></td>
    <td>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region. (pattern: &lt;code&gt;&#91;A-Z&#93;&#123;2&#125;&lt;/code&gt;)</td>
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
    <td><a href="#list_protect_configuration_rule_set_number_overrides"><CopyableCode code="list_protect_configuration_rule_set_number_overrides" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieve all of the protect configuration rule set number overrides that match the filters.</td>
</tr>
<tr>
    <td><a href="#put_protect_configuration_rule_set_number_override"><CopyableCode code="put_protect_configuration_rule_set_number_override" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProtectConfigurationId"><code>ProtectConfigurationId</code></a>, <a href="#parameter-DestinationPhoneNumber"><code>DestinationPhoneNumber</code></a></td>
    <td></td>
    <td>Create or update a phone number rule override and associate it with a protect configuration.</td>
</tr>
<tr>
    <td><a href="#delete_protect_configuration_rule_set_number_override"><CopyableCode code="delete_protect_configuration_rule_set_number_override" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Permanently delete the protect configuration rule set number override.</td>
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
    defaultValue="list_protect_configuration_rule_set_number_overrides"
    values={[
        { label: 'list_protect_configuration_rule_set_number_overrides', value: 'list_protect_configuration_rule_set_number_overrides' }
    ]}
>
<TabItem value="list_protect_configuration_rule_set_number_overrides">

Retrieve all of the protect configuration rule set number overrides that match the filters.

```sql
SELECT
action,
created_timestamp,
destination_phone_number,
expiration_timestamp,
iso_country_code
FROM aws.pinpoint_sms_voice_v2.protect_configuration_rule_set_number_overrides
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_protect_configuration_rule_set_number_override"
    values={[
        { label: 'put_protect_configuration_rule_set_number_override', value: 'put_protect_configuration_rule_set_number_override' }
    ]}
>
<TabItem value="put_protect_configuration_rule_set_number_override">

Create or update a phone number rule override and associate it with a protect configuration.

```sql
REPLACE aws.pinpoint_sms_voice_v2.protect_configuration_rule_set_number_overrides
SET 
ClientToken = '{{ ClientToken }}',
ProtectConfigurationId = '{{ ProtectConfigurationId }}',
DestinationPhoneNumber = '{{ DestinationPhoneNumber }}',
Action = '{{ Action }}',
ExpirationTimestamp = '{{ ExpirationTimestamp }}'
WHERE 
region = '{{ region }}' --required
AND ProtectConfigurationId = '{{ ProtectConfigurationId }}' --required
AND DestinationPhoneNumber = '{{ DestinationPhoneNumber }}' --required
RETURNING
action,
created_timestamp,
destination_phone_number,
expiration_timestamp,
iso_country_code,
protect_configuration_arn,
protect_configuration_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_protect_configuration_rule_set_number_override"
    values={[
        { label: 'delete_protect_configuration_rule_set_number_override', value: 'delete_protect_configuration_rule_set_number_override' }
    ]}
>
<TabItem value="delete_protect_configuration_rule_set_number_override">

Permanently delete the protect configuration rule set number override.

```sql
DELETE FROM aws.pinpoint_sms_voice_v2.protect_configuration_rule_set_number_overrides
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
