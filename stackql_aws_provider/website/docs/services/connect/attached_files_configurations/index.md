--- 
title: attached_files_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - attached_files_configurations
  - connect
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

Creates, updates, deletes, gets or lists an <code>attached_files_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="attached_files_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.attached_files_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_attached_files_configuration"
    values={[
        { label: 'describe_attached_files_configuration', value: 'describe_attached_files_configuration' },
        { label: 'list_attached_files_configurations', value: 'list_attached_files_configurations' }
    ]}
>
<TabItem value="describe_attached_files_configuration">

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
    <td><CopyableCode code="attachment_scope" /></td>
    <td><code>string</code></td>
    <td>The scope of the attachment. Valid values are: EMAIL - Attachments for email messages. CHAT - Attachments for chat conversations. CASE - Attachments for cases. TASK - Attachments for tasks. (EMAIL, CHAT, CASE, TASK)</td>
</tr>
<tr>
    <td><CopyableCode code="extension_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration for allowed file extensions.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Connect Customer instance.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the configuration was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="maximum_size_limit_in_bytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The maximum size limit for attached files in bytes.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_attached_files_configurations">

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
    <td><CopyableCode code="attachment_scope" /></td>
    <td><code>string</code></td>
    <td>The scope of the attachment. Valid values are: EMAIL - Attachments for email messages. CHAT - Attachments for chat conversations. CASE - Attachments for cases. TASK - Attachments for tasks. (EMAIL, CHAT, CASE, TASK)</td>
</tr>
<tr>
    <td><CopyableCode code="extension_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration for allowed file extensions.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Connect Customer instance.</td>
</tr>
<tr>
    <td><CopyableCode code="maximum_size_limit_in_bytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The maximum size limit for attached files in bytes. The minimum value is 1 and the maximum value is 104857600 (100 MB).</td>
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
    <td><a href="#describe_attached_files_configuration"><CopyableCode code="describe_attached_files_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-attachment_scope"><code>attachment_scope</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the attached files configuration for the specified Connect Customer instance and attachment scope. If a custom configuration exists for the specified attachment scope, the custom configuration is returned. If no custom configuration exists, the default configuration values for that attachment scope are returned.</td>
</tr>
<tr>
    <td><a href="#list_attached_files_configurations"><CopyableCode code="list_attached_files_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Provides summary information about the attached files configurations for the specified Connect Customer instance. This API returns effective configurations (custom overrides or defaults) for each attachment scope. If no custom configuration exists for a scope, the default configuration values are returned.</td>
</tr>
<tr>
    <td><a href="#update_attached_files_configuration"><CopyableCode code="update_attached_files_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-attachment_scope"><code>attachment_scope</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the attached files configuration for the specified Connect Customer instance and attachment scope. If no instance-specific configuration exists, this operation creates one. Partial updates are supported—only specified fields are updated, while unspecified fields retain their current values.</td>
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
<tr id="parameter-attachment_scope">
    <td><CopyableCode code="attachment_scope" /></td>
    <td><code>string</code></td>
    <td>The scope of the attachment. Valid values are EMAIL, CHAT, CASE, and TASK.</td>
</tr>
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Connect Customer instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page. The default MaxResult size is 100.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_attached_files_configuration"
    values={[
        { label: 'describe_attached_files_configuration', value: 'describe_attached_files_configuration' },
        { label: 'list_attached_files_configurations', value: 'list_attached_files_configurations' }
    ]}
>
<TabItem value="describe_attached_files_configuration">

Describes the attached files configuration for the specified Connect Customer instance and attachment scope. If a custom configuration exists for the specified attachment scope, the custom configuration is returned. If no custom configuration exists, the default configuration values for that attachment scope are returned.

```sql
SELECT
attachment_scope,
extension_configuration,
instance_id,
last_modified_time,
maximum_size_limit_in_bytes
FROM aws.connect.attached_files_configurations
WHERE instance_id = '{{ instance_id }}' -- required
AND attachment_scope = '{{ attachment_scope }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_attached_files_configurations">

Provides summary information about the attached files configurations for the specified Connect Customer instance. This API returns effective configurations (custom overrides or defaults) for each attachment scope. If no custom configuration exists for a scope, the default configuration values are returned.

```sql
SELECT
attachment_scope,
extension_configuration,
instance_id,
maximum_size_limit_in_bytes
FROM aws.connect.attached_files_configurations
WHERE instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_attached_files_configuration"
    values={[
        { label: 'update_attached_files_configuration', value: 'update_attached_files_configuration' }
    ]}
>
<TabItem value="update_attached_files_configuration">

Updates the attached files configuration for the specified Connect Customer instance and attachment scope. If no instance-specific configuration exists, this operation creates one. Partial updates are supported—only specified fields are updated, while unspecified fields retain their current values.

```sql
UPDATE aws.connect.attached_files_configurations
SET 
MaximumSizeLimitInBytes = {{ MaximumSizeLimitInBytes }},
ExtensionConfiguration = '{{ ExtensionConfiguration }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND attachment_scope = '{{ attachment_scope }}' --required
AND region = '{{ region }}' --required
RETURNING
attachment_scope,
extension_configuration,
instance_id,
last_modified_time,
maximum_size_limit_in_bytes;
```
</TabItem>
</Tabs>
