--- 
title: contact_flow_modules
hide_title: false
hide_table_of_contents: false
keywords:
  - contact_flow_modules
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

Creates, updates, deletes, gets or lists a <code>contact_flow_modules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="contact_flow_modules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.contact_flow_modules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_contact_flow_module"
    values={[
        { label: 'describe_contact_flow_module', value: 'describe_contact_flow_module' },
        { label: 'list_contact_flow_modules', value: 'list_contact_flow_modules' },
        { label: 'search_contact_flow_modules', value: 'search_contact_flow_modules' }
    ]}
>
<TabItem value="describe_contact_flow_module">

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
    <td>The Amazon Resource Name (ARN).</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>string</code></td>
    <td>The JSON string that represents the content of the flow. For an example, see Example flow in Amazon Connect Flow language.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the flow module. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="external_invocation_configuration" /></td>
    <td><code>object</code></td>
    <td>The external invocation configuration for the flow module</td>
</tr>
<tr>
    <td><CopyableCode code="flow_module_content_sha_256" /></td>
    <td><code>string</code></td>
    <td>Hash of the module content for integrity verification. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#123;64&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the flow module.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the flow module. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="settings" /></td>
    <td><code>string</code></td>
    <td>The configuration settings for the flow module.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The type of flow module. (ACTIVE, ARCHIVED)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the flow module. (PUBLISHED, SAVED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource. For example, &#123; "Tags": &#123;"key1":"value1", "key2":"value2"&#125; &#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version of the flow module.</td>
</tr>
<tr>
    <td><CopyableCode code="version_description" /></td>
    <td><code>string</code></td>
    <td>Description of the version. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_contact_flow_modules">

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
    <td>The Amazon Resource Name (ARN) of the flow module.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the flow module.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the flow module. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The type of flow module. (ACTIVE, ARCHIVED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_contact_flow_modules">

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
    <td>The Amazon Resource Name (ARN).</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>string</code></td>
    <td>The JSON string that represents the content of the flow. For an example, see Example flow in Amazon Connect Flow language.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the flow module. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="external_invocation_configuration" /></td>
    <td><code>object</code></td>
    <td>The external invocation configuration for the flow module</td>
</tr>
<tr>
    <td><CopyableCode code="flow_module_content_sha_256" /></td>
    <td><code>string</code></td>
    <td>Hash of the module content for integrity verification. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#123;64&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the flow module.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the flow module. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="settings" /></td>
    <td><code>string</code></td>
    <td>The configuration settings for the flow module.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The type of flow module. (ACTIVE, ARCHIVED)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the flow module. (PUBLISHED, SAVED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource. For example, &#123; "Tags": &#123;"key1":"value1", "key2":"value2"&#125; &#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version of the flow module.</td>
</tr>
<tr>
    <td><CopyableCode code="version_description" /></td>
    <td><code>string</code></td>
    <td>Description of the version. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
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
    <td><a href="#describe_contact_flow_module"><CopyableCode code="describe_contact_flow_module" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-contact_flow_module_id"><code>contact_flow_module_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the specified flow module. Use the $SAVED alias in the request to describe the SAVED content of a Flow. For example, arn:aws:.../contact-flow/&#123;id&#125;:$SAVED. After a flow is published, $SAVED needs to be supplied to view saved content that has not been published.</td>
</tr>
<tr>
    <td><a href="#list_contact_flow_modules"><CopyableCode code="list_contact_flow_modules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-state"><code>state</code></a></td>
    <td>Provides information about the flow modules for the specified Amazon Connect instance.</td>
</tr>
<tr>
    <td><a href="#search_contact_flow_modules"><CopyableCode code="search_contact_flow_modules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches the flow modules in an Amazon Connect instance, with optional filtering.</td>
</tr>
<tr>
    <td><a href="#create_contact_flow_module"><CopyableCode code="create_contact_flow_module" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a flow module for the specified Amazon Connect instance.</td>
</tr>
<tr>
    <td><a href="#update_contact_flow_module_content"><CopyableCode code="update_contact_flow_module_content" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-contact_flow_module_id"><code>contact_flow_module_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates specified flow module for the specified Amazon Connect instance. Use the $SAVED alias in the request to describe the SAVED content of a Flow. For example, arn:aws:.../contact-flow/&#123;id&#125;:$SAVED. After a flow is published, $SAVED needs to be supplied to view saved content that has not been published.</td>
</tr>
<tr>
    <td><a href="#delete_contact_flow_module"><CopyableCode code="delete_contact_flow_module" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-contact_flow_module_id"><code>contact_flow_module_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified flow module.</td>
</tr>
<tr>
    <td><a href="#update_contact_flow_module_metadata"><CopyableCode code="update_contact_flow_module_metadata" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-contact_flow_module_id"><code>contact_flow_module_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates metadata about specified flow module.</td>
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
<tr id="parameter-contact_flow_module_id">
    <td><CopyableCode code="contact_flow_module_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the flow module.</td>
</tr>
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
<tr id="parameter-state">
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the flow module.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_contact_flow_module"
    values={[
        { label: 'describe_contact_flow_module', value: 'describe_contact_flow_module' },
        { label: 'list_contact_flow_modules', value: 'list_contact_flow_modules' },
        { label: 'search_contact_flow_modules', value: 'search_contact_flow_modules' }
    ]}
>
<TabItem value="describe_contact_flow_module">

Describes the specified flow module. Use the $SAVED alias in the request to describe the SAVED content of a Flow. For example, arn:aws:.../contact-flow/&#123;id&#125;:$SAVED. After a flow is published, $SAVED needs to be supplied to view saved content that has not been published.

```sql
SELECT
arn,
content,
description,
external_invocation_configuration,
flow_module_content_sha_256,
id,
name,
settings,
state,
status,
tags,
version,
version_description
FROM aws.connect.contact_flow_modules
WHERE instance_id = '{{ instance_id }}' -- required
AND contact_flow_module_id = '{{ contact_flow_module_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_contact_flow_modules">

Provides information about the flow modules for the specified Amazon Connect instance.

```sql
SELECT
arn,
id,
name,
state
FROM aws.connect.contact_flow_modules
WHERE instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND state = '{{ state }}'
;
```
</TabItem>
<TabItem value="search_contact_flow_modules">

Searches the flow modules in an Amazon Connect instance, with optional filtering.

```sql
SELECT
arn,
content,
description,
external_invocation_configuration,
flow_module_content_sha_256,
id,
name,
settings,
state,
status,
tags,
version,
version_description
FROM aws.connect.contact_flow_modules
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_contact_flow_module"
    values={[
        { label: 'create_contact_flow_module', value: 'create_contact_flow_module' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_contact_flow_module">

Creates a flow module for the specified Amazon Connect instance.

```sql
INSERT INTO aws.connect.contact_flow_modules (
Name,
Description,
Content,
Tags,
ClientToken,
Settings,
ExternalInvocationConfiguration,
instance_id,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ Content }}',
'{{ Tags }}',
'{{ ClientToken }}',
'{{ Settings }}',
'{{ ExternalInvocationConfiguration }}',
'{{ instance_id }}',
'{{ region }}'
RETURNING
arn,
id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: contact_flow_modules
  props:
    - name: instance_id
      value: "{{ instance_id }}"
      description: Required parameter for the contact_flow_modules resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the contact_flow_modules resource.
    - name: Name
      value: "{{ Name }}"
    - name: Description
      value: "{{ Description }}"
    - name: Content
      value: "{{ Content }}"
    - name: Tags
      value: "{{ Tags }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: Settings
      value: "{{ Settings }}"
    - name: ExternalInvocationConfiguration
      description: |
        The external invocation configuration for the flow module
      value:
        Enabled: {{ Enabled }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_contact_flow_module_content"
    values={[
        { label: 'update_contact_flow_module_content', value: 'update_contact_flow_module_content' }
    ]}
>
<TabItem value="update_contact_flow_module_content">

Updates specified flow module for the specified Amazon Connect instance. Use the $SAVED alias in the request to describe the SAVED content of a Flow. For example, arn:aws:.../contact-flow/&#123;id&#125;:$SAVED. After a flow is published, $SAVED needs to be supplied to view saved content that has not been published.

```sql
UPDATE aws.connect.contact_flow_modules
SET 
Content = '{{ Content }}',
Settings = '{{ Settings }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND contact_flow_module_id = '{{ contact_flow_module_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_contact_flow_module"
    values={[
        { label: 'delete_contact_flow_module', value: 'delete_contact_flow_module' }
    ]}
>
<TabItem value="delete_contact_flow_module">

Deletes the specified flow module.

```sql
DELETE FROM aws.connect.contact_flow_modules
WHERE instance_id = '{{ instance_id }}' --required
AND contact_flow_module_id = '{{ contact_flow_module_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="update_contact_flow_module_metadata"
    values={[
        { label: 'update_contact_flow_module_metadata', value: 'update_contact_flow_module_metadata' }
    ]}
>
<TabItem value="update_contact_flow_module_metadata">

Updates metadata about specified flow module.

```sql
EXEC aws.connect.contact_flow_modules.update_contact_flow_module_metadata 
@instance_id='{{ instance_id }}' --required, 
@contact_flow_module_id='{{ contact_flow_module_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Name": "{{ Name }}", 
"Description": "{{ Description }}", 
"State": "{{ State }}"
}'
;
```
</TabItem>
</Tabs>
