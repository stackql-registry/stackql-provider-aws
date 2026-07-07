--- 
title: notify_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - notify_configurations
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

Creates, updates, deletes, gets or lists a <code>notify_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="notify_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint_sms_voice_v2.notify_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_notify_configurations"
    values={[
        { label: 'describe_notify_configurations', value: 'describe_notify_configurations' }
    ]}
>
<TabItem value="describe_notify_configurations">

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
    <td><CopyableCode code="CreatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the notify configuration was created, in UNIX epoch time format.</td>
</tr>
<tr>
    <td><CopyableCode code="DefaultTemplateId" /></td>
    <td><code>string</code></td>
    <td>The default template identifier associated with the notify configuration. (pattern: &lt;code&gt;(&#91;A-Za-z0-9_-&#93;*|UNSET_DEFAULT_TEMPLATE)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DeletionProtectionEnabled" /></td>
    <td><code>boolean</code></td>
    <td>When set to true deletion protection is enabled. By default this is set to false.</td>
</tr>
<tr>
    <td><CopyableCode code="DisplayName" /></td>
    <td><code>string</code></td>
    <td>The display name associated with the notify configuration. (pattern: &lt;code&gt;&#91;A-Za-z0-9_ -&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EnabledChannels" /></td>
    <td><code>array</code></td>
    <td>An array of channels enabled for the notify configuration. Supported values include SMS and VOICE.</td>
</tr>
<tr>
    <td><CopyableCode code="EnabledCountries" /></td>
    <td><code>array</code></td>
    <td>An array of two-character ISO country codes, in ISO 3166-1 alpha-2 format, that are enabled for the notify configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="NotifyConfigurationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the notify configuration. (pattern: &lt;code&gt;arn:\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NotifyConfigurationId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the notify configuration. (pattern: &lt;code&gt;&#91;A-Za-z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PoolId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the pool associated with the notify configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="RejectionReason" /></td>
    <td><code>string</code></td>
    <td>The reason the notify configuration was rejected, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of the notify configuration. (PENDING, ACTIVE, REJECTED, REQUIRES_VERIFICATION)</td>
</tr>
<tr>
    <td><CopyableCode code="Tier" /></td>
    <td><code>string</code></td>
    <td>The tier of the notify configuration. (BASIC, ADVANCED)</td>
</tr>
<tr>
    <td><CopyableCode code="TierUpgradeStatus" /></td>
    <td><code>string</code></td>
    <td>The tier upgrade status of the notify configuration. (BASIC, PENDING_UPGRADE, ADVANCED, REJECTED)</td>
</tr>
<tr>
    <td><CopyableCode code="UseCase" /></td>
    <td><code>string</code></td>
    <td>The use case for the notify configuration. (CODE_VERIFICATION)</td>
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
    <td><a href="#describe_notify_configurations"><CopyableCode code="describe_notify_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the specified notify configurations or all notify configurations in your account. If you specify notify configuration IDs, the output includes information for only the specified notify configurations. If you specify filters, the output includes information for only those notify configurations that meet the filter criteria. If you don't specify notify configuration IDs or filters, the output includes information for all notify configurations. If you specify a notify configuration ID that isn't valid, an error is returned.</td>
</tr>
<tr>
    <td><a href="#create_notify_configuration"><CopyableCode code="create_notify_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DisplayName"><code>DisplayName</code></a>, <a href="#parameter-UseCase"><code>UseCase</code></a>, <a href="#parameter-EnabledChannels"><code>EnabledChannels</code></a></td>
    <td></td>
    <td>Creates a new notify configuration for managed messaging. A notify configuration defines the settings for sending templated messages, including the display name, use case, enabled channels, and enabled countries.</td>
</tr>
<tr>
    <td><a href="#update_notify_configuration"><CopyableCode code="update_notify_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-NotifyConfigurationId"><code>NotifyConfigurationId</code></a></td>
    <td></td>
    <td>Updates an existing notify configuration. You can update the default template, pool association, enabled channels, enabled countries, and deletion protection settings.</td>
</tr>
<tr>
    <td><a href="#delete_notify_configuration"><CopyableCode code="delete_notify_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing notify configuration. If deletion protection is enabled, an error is returned.</td>
</tr>
<tr>
    <td><a href="#send_notify_text_message"><CopyableCode code="send_notify_text_message" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-NotifyConfigurationId"><code>NotifyConfigurationId</code></a>, <a href="#parameter-DestinationPhoneNumber"><code>DestinationPhoneNumber</code></a>, <a href="#parameter-TemplateVariables"><code>TemplateVariables</code></a></td>
    <td></td>
    <td>Sends a templated text message through a notify configuration to a recipient's phone number.</td>
</tr>
<tr>
    <td><a href="#send_notify_voice_message"><CopyableCode code="send_notify_voice_message" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-NotifyConfigurationId"><code>NotifyConfigurationId</code></a>, <a href="#parameter-DestinationPhoneNumber"><code>DestinationPhoneNumber</code></a>, <a href="#parameter-TemplateVariables"><code>TemplateVariables</code></a></td>
    <td></td>
    <td>Sends a templated voice message through a notify configuration to a recipient's phone number.</td>
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
    defaultValue="describe_notify_configurations"
    values={[
        { label: 'describe_notify_configurations', value: 'describe_notify_configurations' }
    ]}
>
<TabItem value="describe_notify_configurations">

Describes the specified notify configurations or all notify configurations in your account. If you specify notify configuration IDs, the output includes information for only the specified notify configurations. If you specify filters, the output includes information for only those notify configurations that meet the filter criteria. If you don't specify notify configuration IDs or filters, the output includes information for all notify configurations. If you specify a notify configuration ID that isn't valid, an error is returned.

```sql
SELECT
CreatedTimestamp,
DefaultTemplateId,
DeletionProtectionEnabled,
DisplayName,
EnabledChannels,
EnabledCountries,
NotifyConfigurationArn,
NotifyConfigurationId,
PoolId,
RejectionReason,
Status,
Tier,
TierUpgradeStatus,
UseCase
FROM aws.pinpoint_sms_voice_v2.notify_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_notify_configuration"
    values={[
        { label: 'create_notify_configuration', value: 'create_notify_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_notify_configuration">

Creates a new notify configuration for managed messaging. A notify configuration defines the settings for sending templated messages, including the display name, use case, enabled channels, and enabled countries.

```sql
INSERT INTO aws.pinpoint_sms_voice_v2.notify_configurations (
DisplayName,
UseCase,
DefaultTemplateId,
PoolId,
EnabledCountries,
EnabledChannels,
DeletionProtectionEnabled,
ClientToken,
Tags,
region
)
SELECT 
'{{ DisplayName }}' /* required */,
'{{ UseCase }}' /* required */,
'{{ DefaultTemplateId }}',
'{{ PoolId }}',
'{{ EnabledCountries }}',
'{{ EnabledChannels }}' /* required */,
{{ DeletionProtectionEnabled }},
'{{ ClientToken }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
CreatedTimestamp,
DefaultTemplateId,
DeletionProtectionEnabled,
DisplayName,
EnabledChannels,
EnabledCountries,
NotifyConfigurationArn,
NotifyConfigurationId,
PoolId,
RejectionReason,
Status,
Tags,
Tier,
TierUpgradeStatus,
UseCase
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: notify_configurations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the notify_configurations resource.
    - name: DisplayName
      value: "{{ DisplayName }}"
      description: |
        The display name to associate with the notify configuration.
    - name: UseCase
      value: "{{ UseCase }}"
      description: |
        The use case for the notify configuration.
      valid_values: ['CODE_VERIFICATION']
    - name: DefaultTemplateId
      value: "{{ DefaultTemplateId }}"
      description: |
        The default template identifier to associate with the notify configuration. If specified, this template is used when sending messages without an explicit template identifier.
    - name: PoolId
      value: "{{ PoolId }}"
      description: |
        The identifier of the pool to associate with the notify configuration.
    - name: EnabledCountries
      value:
        - "{{ EnabledCountries }}"
      description: |
        An array of two-character ISO country codes, in ISO 3166-1 alpha-2 format, that are enabled for the notify configuration.
    - name: EnabledChannels
      value:
        - "{{ EnabledChannels }}"
      description: |
        An array of channels to enable for the notify configuration. Supported values include SMS and VOICE.
    - name: DeletionProtectionEnabled
      value: {{ DeletionProtectionEnabled }}
      description: |
        By default this is set to false. When set to true the notify configuration can't be deleted. You can change this value using the UpdateNotifyConfiguration action.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.
    - name: Tags
      description: |
        An array of tags (key and value pairs) associated with the notify configuration.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_notify_configuration"
    values={[
        { label: 'update_notify_configuration', value: 'update_notify_configuration' }
    ]}
>
<TabItem value="update_notify_configuration">

Updates an existing notify configuration. You can update the default template, pool association, enabled channels, enabled countries, and deletion protection settings.

```sql
UPDATE aws.pinpoint_sms_voice_v2.notify_configurations
SET 
NotifyConfigurationId = '{{ NotifyConfigurationId }}',
DefaultTemplateId = '{{ DefaultTemplateId }}',
PoolId = '{{ PoolId }}',
EnabledCountries = '{{ EnabledCountries }}',
EnabledChannels = '{{ EnabledChannels }}',
DeletionProtectionEnabled = {{ DeletionProtectionEnabled }}
WHERE 
region = '{{ region }}' --required
AND NotifyConfigurationId = '{{ NotifyConfigurationId }}' --required
RETURNING
CreatedTimestamp,
DefaultTemplateId,
DeletionProtectionEnabled,
DisplayName,
EnabledChannels,
EnabledCountries,
NotifyConfigurationArn,
NotifyConfigurationId,
PoolId,
RejectionReason,
Status,
Tier,
TierUpgradeStatus,
UseCase;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_notify_configuration"
    values={[
        { label: 'delete_notify_configuration', value: 'delete_notify_configuration' }
    ]}
>
<TabItem value="delete_notify_configuration">

Deletes an existing notify configuration. If deletion protection is enabled, an error is returned.

```sql
DELETE FROM aws.pinpoint_sms_voice_v2.notify_configurations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="send_notify_text_message"
    values={[
        { label: 'send_notify_text_message', value: 'send_notify_text_message' },
        { label: 'send_notify_voice_message', value: 'send_notify_voice_message' }
    ]}
>
<TabItem value="send_notify_text_message">

Sends a templated text message through a notify configuration to a recipient's phone number.

```sql
EXEC aws.pinpoint_sms_voice_v2.notify_configurations.send_notify_text_message 
@region='{{ region }}' --required 
@@json=
'{
"NotifyConfigurationId": "{{ NotifyConfigurationId }}", 
"DestinationPhoneNumber": "{{ DestinationPhoneNumber }}", 
"TemplateId": "{{ TemplateId }}", 
"TemplateVariables": "{{ TemplateVariables }}", 
"TimeToLive": {{ TimeToLive }}, 
"Context": "{{ Context }}", 
"ConfigurationSetName": "{{ ConfigurationSetName }}", 
"DryRun": {{ DryRun }}, 
"MessageFeedbackEnabled": {{ MessageFeedbackEnabled }}
}'
;
```
</TabItem>
<TabItem value="send_notify_voice_message">

Sends a templated voice message through a notify configuration to a recipient's phone number.

```sql
EXEC aws.pinpoint_sms_voice_v2.notify_configurations.send_notify_voice_message 
@region='{{ region }}' --required 
@@json=
'{
"NotifyConfigurationId": "{{ NotifyConfigurationId }}", 
"DestinationPhoneNumber": "{{ DestinationPhoneNumber }}", 
"TemplateId": "{{ TemplateId }}", 
"TemplateVariables": "{{ TemplateVariables }}", 
"VoiceId": "{{ VoiceId }}", 
"TimeToLive": {{ TimeToLive }}, 
"Context": "{{ Context }}", 
"ConfigurationSetName": "{{ ConfigurationSetName }}", 
"DryRun": {{ DryRun }}, 
"MessageFeedbackEnabled": {{ MessageFeedbackEnabled }}
}'
;
```
</TabItem>
</Tabs>
