--- 
title: dlp_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - dlp_settings
  - quicksight
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

Creates, updates, deletes, gets or lists a <code>dlp_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dlp_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.dlp_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_dlp_setting"
    values={[
        { label: 'describe_dlp_setting', value: 'describe_dlp_setting' },
        { label: 'list_dlp_settings', value: 'list_dlp_settings' }
    ]}
>
<TabItem value="describe_dlp_setting">

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
    <td><CopyableCode code="dlp_setting" /></td>
    <td><code>object</code></td>
    <td>The full configuration of the requested DLP setting, returned as a DlpSettingDetails object.</td>
</tr>
<tr>
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_dlp_settings">

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
    <td>The Amazon Resource Name (ARN) of the DLP setting.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the DLP setting was created, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="dlp_setting_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the DLP setting. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The display name of the DLP setting. (pattern: &lt;code&gt;&#91;A-Za-z0-9&#93;(?:&#91;\w- &&#93;*&#91;A-Za-z0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="provider_type" /></td>
    <td><code>string</code></td>
    <td>The type of external DLP provider used for sensitivity label classification. (MICROSOFT_PURVIEW)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the DLP setting. Valid values are ACTIVE and INACTIVE. (ACTIVE, INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the DLP setting was most recently updated, in ISO 8601 format.</td>
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
    <td><a href="#describe_dlp_setting"><CopyableCode code="describe_dlp_setting" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-dlp_setting_id"><code>dlp_setting_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the full configuration of a DLP setting in an Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#list_dlp_settings"><CopyableCode code="list_dlp_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-results"><code>max-results</code></a></td>
    <td>Lists all DLP settings in an Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_dlp_setting"><CopyableCode code="create_dlp_setting" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-dlp_setting_id"><code>dlp_setting_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProviderType"><code>ProviderType</code></a>, <a href="#parameter-ProviderConfig"><code>ProviderConfig</code></a>, <a href="#parameter-ProviderOutageAction"><code>ProviderOutageAction</code></a>, <a href="#parameter-Enabled"><code>Enabled</code></a></td>
    <td></td>
    <td>Creates a data loss prevention (DLP) setting configuration for an Amazon Web Services account. A DLP setting defines the DLP provider, the enforcement behavior, and the Quick capabilities that the setting applies to.</td>
</tr>
<tr>
    <td><a href="#update_dlp_setting"><CopyableCode code="update_dlp_setting" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-dlp_setting_id"><code>dlp_setting_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing DLP setting configuration in an Amazon Web Services account. Fields that are omitted from the request retain their current values.</td>
</tr>
<tr>
    <td><a href="#delete_dlp_setting"><CopyableCode code="delete_dlp_setting" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-dlp_setting_id"><code>dlp_setting_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a DLP setting configuration from an Amazon Web Services account.</td>
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
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that contains the DLP setting that you want to delete.</td>
</tr>
<tr id="parameter-dlp_setting_id">
    <td><CopyableCode code="dlp_setting_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the DLP setting that you want to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per request.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null if there are no more results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_dlp_setting"
    values={[
        { label: 'describe_dlp_setting', value: 'describe_dlp_setting' },
        { label: 'list_dlp_settings', value: 'list_dlp_settings' }
    ]}
>
<TabItem value="describe_dlp_setting">

Describes the full configuration of a DLP setting in an Amazon Web Services account.

```sql
SELECT
dlp_setting,
request_id
FROM aws.quicksight.dlp_settings
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND dlp_setting_id = '{{ dlp_setting_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_dlp_settings">

Lists all DLP settings in an Amazon Web Services account.

```sql
SELECT
arn,
created_at,
dlp_setting_id,
name,
provider_type,
status,
updated_at
FROM aws.quicksight.dlp_settings
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `max-results` = '{{ max-results }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_dlp_setting"
    values={[
        { label: 'create_dlp_setting', value: 'create_dlp_setting' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_dlp_setting">

Creates a data loss prevention (DLP) setting configuration for an Amazon Web Services account. A DLP setting defines the DLP provider, the enforcement behavior, and the Quick capabilities that the setting applies to.

```sql
INSERT INTO aws.quicksight.dlp_settings (
Name,
ProviderType,
ProviderConfig,
ProviderOutageAction,
Enabled,
Tags,
aws_account_id,
dlp_setting_id,
region
)
SELECT 
'{{ Name }}',
'{{ ProviderType }}' /* required */,
'{{ ProviderConfig }}' /* required */,
'{{ ProviderOutageAction }}' /* required */,
{{ Enabled }} /* required */,
'{{ Tags }}',
'{{ aws_account_id }}',
'{{ dlp_setting_id }}',
'{{ region }}'
RETURNING
arn,
dlp_setting_id,
request_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: dlp_settings
  props:
    - name: aws_account_id
      value: "{{ aws_account_id }}"
      description: Required parameter for the dlp_settings resource.
    - name: dlp_setting_id
      value: "{{ dlp_setting_id }}"
      description: Required parameter for the dlp_settings resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the dlp_settings resource.
    - name: Name
      value: "{{ Name }}"
    - name: ProviderType
      value: "{{ ProviderType }}"
      valid_values: ['MICROSOFT_PURVIEW']
    - name: ProviderConfig
      description: |
        The provider-specific configuration for a DLP integration. This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
      value:
        MicrosoftPurview:
          Credentials:
            SecretArn: "{{ SecretArn }}"
          LabelActionMappings:
            - LabelId: "{{ LabelId }}"
              LabelName: "{{ LabelName }}"
              Action: "{{ Action }}"
          UnmappedAction: "{{ UnmappedAction }}"
    - name: ProviderOutageAction
      value: "{{ ProviderOutageAction }}"
      valid_values: ['ALLOW', 'WARN', 'BLOCK']
    - name: Enabled
      value: {{ Enabled }}
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_dlp_setting"
    values={[
        { label: 'update_dlp_setting', value: 'update_dlp_setting' }
    ]}
>
<TabItem value="update_dlp_setting">

Updates an existing DLP setting configuration in an Amazon Web Services account. Fields that are omitted from the request retain their current values.

```sql
UPDATE aws.quicksight.dlp_settings
SET 
Name = '{{ Name }}',
ProviderType = '{{ ProviderType }}',
ProviderConfig = '{{ ProviderConfig }}',
ProviderOutageAction = '{{ ProviderOutageAction }}',
Enabled = {{ Enabled }}
WHERE 
aws_account_id = '{{ aws_account_id }}' --required
AND dlp_setting_id = '{{ dlp_setting_id }}' --required
AND region = '{{ region }}' --required
RETURNING
arn,
dlp_setting_id,
request_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_dlp_setting"
    values={[
        { label: 'delete_dlp_setting', value: 'delete_dlp_setting' }
    ]}
>
<TabItem value="delete_dlp_setting">

Deletes a DLP setting configuration from an Amazon Web Services account.

```sql
DELETE FROM aws.quicksight.dlp_settings
WHERE aws_account_id = '{{ aws_account_id }}' --required
AND dlp_setting_id = '{{ dlp_setting_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
