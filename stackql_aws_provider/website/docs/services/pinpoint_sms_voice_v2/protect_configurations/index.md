--- 
title: protect_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - protect_configurations
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

Creates, updates, deletes, gets or lists a <code>protect_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="protect_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint_sms_voice_v2.protect_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_protect_configurations"
    values={[
        { label: 'describe_protect_configurations', value: 'describe_protect_configurations' }
    ]}
>
<TabItem value="describe_protect_configurations">

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
    <td><CopyableCode code="account_default" /></td>
    <td><code>boolean</code></td>
    <td>This is true if the protect configuration is set as your account default protect configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="created_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the protect configuration was created, in UNIX epoch time format.</td>
</tr>
<tr>
    <td><CopyableCode code="deletion_protection_enabled" /></td>
    <td><code>boolean</code></td>
    <td>The status of deletion protection for the protect configuration. When set to true deletion protection is enabled. By default this is set to false.</td>
</tr>
<tr>
    <td><CopyableCode code="protect_configuration_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the protect configuration. (pattern: &lt;code&gt;arn:\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="protect_configuration_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the protect configuration. (pattern: &lt;code&gt;&#91;A-Za-z0-9_-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#describe_protect_configurations"><CopyableCode code="describe_protect_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the protect configurations that match any of filters. If a filter isn’t provided then all protect configurations are returned.</td>
</tr>
<tr>
    <td><a href="#create_protect_configuration"><CopyableCode code="create_protect_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Create a new protect configuration. By default all country rule sets for each capability are set to ALLOW. Update the country rule sets using UpdateProtectConfigurationCountryRuleSet. A protect configurations name is stored as a Tag with the key set to Name and value as the name of the protect configuration.</td>
</tr>
<tr>
    <td><a href="#associate_protect_configuration"><CopyableCode code="associate_protect_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProtectConfigurationId"><code>ProtectConfigurationId</code></a>, <a href="#parameter-ConfigurationSetName"><code>ConfigurationSetName</code></a></td>
    <td></td>
    <td>Associate a protect configuration with a configuration set. This replaces the configuration sets current protect configuration. A configuration set can only be associated with one protect configuration at a time. A protect configuration can be associated with multiple configuration sets.</td>
</tr>
<tr>
    <td><a href="#update_protect_configuration"><CopyableCode code="update_protect_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProtectConfigurationId"><code>ProtectConfigurationId</code></a></td>
    <td></td>
    <td>Update the setting for an existing protect configuration.</td>
</tr>
<tr>
    <td><a href="#delete_protect_configuration"><CopyableCode code="delete_protect_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Permanently delete the protect configuration. The protect configuration must have deletion protection disabled and must not be associated as the account default protect configuration or associated with a configuration set.</td>
</tr>
<tr>
    <td><a href="#delete_account_default_protect_configuration"><CopyableCode code="delete_account_default_protect_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes the current account default protect configuration.</td>
</tr>
<tr>
    <td><a href="#disassociate_protect_configuration"><CopyableCode code="disassociate_protect_configuration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProtectConfigurationId"><code>ProtectConfigurationId</code></a>, <a href="#parameter-ConfigurationSetName"><code>ConfigurationSetName</code></a></td>
    <td></td>
    <td>Disassociate a protect configuration from a configuration set.</td>
</tr>
<tr>
    <td><a href="#set_account_default_protect_configuration"><CopyableCode code="set_account_default_protect_configuration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProtectConfigurationId"><code>ProtectConfigurationId</code></a></td>
    <td></td>
    <td>Set a protect configuration as your account default. You can only have one account default protect configuration at a time. The current account default protect configuration is replaced with the provided protect configuration.</td>
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
    defaultValue="describe_protect_configurations"
    values={[
        { label: 'describe_protect_configurations', value: 'describe_protect_configurations' }
    ]}
>
<TabItem value="describe_protect_configurations">

Retrieves the protect configurations that match any of filters. If a filter isn’t provided then all protect configurations are returned.

```sql
SELECT
account_default,
created_timestamp,
deletion_protection_enabled,
protect_configuration_arn,
protect_configuration_id
FROM aws.pinpoint_sms_voice_v2.protect_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_protect_configuration"
    values={[
        { label: 'create_protect_configuration', value: 'create_protect_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_protect_configuration">

Create a new protect configuration. By default all country rule sets for each capability are set to ALLOW. Update the country rule sets using UpdateProtectConfigurationCountryRuleSet. A protect configurations name is stored as a Tag with the key set to Name and value as the name of the protect configuration.

```sql
INSERT INTO aws.pinpoint_sms_voice_v2.protect_configurations (
ClientToken,
DeletionProtectionEnabled,
Tags,
region
)
SELECT 
'{{ ClientToken }}',
{{ DeletionProtectionEnabled }},
'{{ Tags }}',
'{{ region }}'
RETURNING
account_default,
created_timestamp,
deletion_protection_enabled,
protect_configuration_arn,
protect_configuration_id,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: protect_configurations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the protect_configurations resource.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.
    - name: DeletionProtectionEnabled
      value: {{ DeletionProtectionEnabled }}
      description: |
        When set to true deletion protection is enabled. By default this is set to false.
    - name: Tags
      description: |
        An array of key and value pair tags that are associated with the resource.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_protect_configuration"
    values={[
        { label: 'associate_protect_configuration', value: 'associate_protect_configuration' },
        { label: 'update_protect_configuration', value: 'update_protect_configuration' }
    ]}
>
<TabItem value="associate_protect_configuration">

Associate a protect configuration with a configuration set. This replaces the configuration sets current protect configuration. A configuration set can only be associated with one protect configuration at a time. A protect configuration can be associated with multiple configuration sets.

```sql
UPDATE aws.pinpoint_sms_voice_v2.protect_configurations
SET 
ProtectConfigurationId = '{{ ProtectConfigurationId }}',
ConfigurationSetName = '{{ ConfigurationSetName }}'
WHERE 
region = '{{ region }}' --required
AND ProtectConfigurationId = '{{ ProtectConfigurationId }}' --required
AND ConfigurationSetName = '{{ ConfigurationSetName }}' --required
RETURNING
configuration_set_arn,
configuration_set_name,
protect_configuration_arn,
protect_configuration_id;
```
</TabItem>
<TabItem value="update_protect_configuration">

Update the setting for an existing protect configuration.

```sql
UPDATE aws.pinpoint_sms_voice_v2.protect_configurations
SET 
ProtectConfigurationId = '{{ ProtectConfigurationId }}',
DeletionProtectionEnabled = {{ DeletionProtectionEnabled }}
WHERE 
region = '{{ region }}' --required
AND ProtectConfigurationId = '{{ ProtectConfigurationId }}' --required
RETURNING
account_default,
created_timestamp,
deletion_protection_enabled,
protect_configuration_arn,
protect_configuration_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_protect_configuration"
    values={[
        { label: 'delete_protect_configuration', value: 'delete_protect_configuration' },
        { label: 'delete_account_default_protect_configuration', value: 'delete_account_default_protect_configuration' }
    ]}
>
<TabItem value="delete_protect_configuration">

Permanently delete the protect configuration. The protect configuration must have deletion protection disabled and must not be associated as the account default protect configuration or associated with a configuration set.

```sql
DELETE FROM aws.pinpoint_sms_voice_v2.protect_configurations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_account_default_protect_configuration">

Removes the current account default protect configuration.

```sql
DELETE FROM aws.pinpoint_sms_voice_v2.protect_configurations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_protect_configuration"
    values={[
        { label: 'disassociate_protect_configuration', value: 'disassociate_protect_configuration' },
        { label: 'set_account_default_protect_configuration', value: 'set_account_default_protect_configuration' }
    ]}
>
<TabItem value="disassociate_protect_configuration">

Disassociate a protect configuration from a configuration set.

```sql
EXEC aws.pinpoint_sms_voice_v2.protect_configurations.disassociate_protect_configuration 
@region='{{ region }}' --required 
@@json=
'{
"ProtectConfigurationId": "{{ ProtectConfigurationId }}", 
"ConfigurationSetName": "{{ ConfigurationSetName }}"
}'
;
```
</TabItem>
<TabItem value="set_account_default_protect_configuration">

Set a protect configuration as your account default. You can only have one account default protect configuration at a time. The current account default protect configuration is replaced with the provided protect configuration.

```sql
EXEC aws.pinpoint_sms_voice_v2.protect_configurations.set_account_default_protect_configuration 
@region='{{ region }}' --required 
@@json=
'{
"ProtectConfigurationId": "{{ ProtectConfigurationId }}"
}'
;
```
</TabItem>
</Tabs>
