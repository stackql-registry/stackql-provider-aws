--- 
title: channel_namespaces
hide_title: false
hide_table_of_contents: false
keywords:
  - channel_namespaces
  - appsync
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

Creates, updates, deletes, gets or lists a <code>channel_namespaces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="channel_namespaces" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appsync.channel_namespaces" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_channel_namespace"
    values={[
        { label: 'get_channel_namespace', value: 'get_channel_namespace' },
        { label: 'list_channel_namespaces', value: 'list_channel_namespaces' }
    ]}
>
<TabItem value="get_channel_namespace">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the channel namespace. This name must be unique within the Api. (pattern: &lt;code&gt;(&#91;A-Za-z0-9&#93;(?:&#91;A-Za-z0-9\-&#93;&#123;0,48&#125;&#91;A-Za-z0-9&#93;)?)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="api_id" /></td>
    <td><code>string</code></td>
    <td>The Api ID.</td>
</tr>
<tr>
    <td><CopyableCode code="channel_namespace_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the ChannelNamespace.</td>
</tr>
<tr>
    <td><CopyableCode code="code_handlers" /></td>
    <td><code>string</code></td>
    <td>The event handler functions that run custom business logic to process published events and subscribe requests.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the ChannelNamespace was created.</td>
</tr>
<tr>
    <td><CopyableCode code="handler_configs" /></td>
    <td><code>object</code></td>
    <td>The configuration for the OnPublish and OnSubscribe handlers.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the ChannelNamespace was last changed.</td>
</tr>
<tr>
    <td><CopyableCode code="publish_auth_modes" /></td>
    <td><code>array</code></td>
    <td>The authorization mode to use for publishing messages on the channel namespace. This configuration overrides the default Apiauthorization configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="subscribe_auth_modes" /></td>
    <td><code>array</code></td>
    <td>The authorization mode to use for subscribing to messages on the channel namespace. This configuration overrides the default Apiauthorization configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_channel_namespaces">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the channel namespace. This name must be unique within the Api. (pattern: &lt;code&gt;(&#91;A-Za-z0-9&#93;(?:&#91;A-Za-z0-9\-&#93;&#123;0,48&#125;&#91;A-Za-z0-9&#93;)?)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="api_id" /></td>
    <td><code>string</code></td>
    <td>The Api ID.</td>
</tr>
<tr>
    <td><CopyableCode code="channel_namespace_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the ChannelNamespace.</td>
</tr>
<tr>
    <td><CopyableCode code="code_handlers" /></td>
    <td><code>string</code></td>
    <td>The event handler functions that run custom business logic to process published events and subscribe requests.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the ChannelNamespace was created.</td>
</tr>
<tr>
    <td><CopyableCode code="handler_configs" /></td>
    <td><code>object</code></td>
    <td>The configuration for the OnPublish and OnSubscribe handlers.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the ChannelNamespace was last changed.</td>
</tr>
<tr>
    <td><CopyableCode code="publish_auth_modes" /></td>
    <td><code>array</code></td>
    <td>The authorization mode to use for publishing messages on the channel namespace. This configuration overrides the default Apiauthorization configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="subscribe_auth_modes" /></td>
    <td><code>array</code></td>
    <td>The authorization mode to use for subscribing to messages on the channel namespace. This configuration overrides the default Apiauthorization configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td></td>
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
    <td><a href="#get_channel_namespace"><CopyableCode code="get_channel_namespace" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the channel namespace for a specified Api.</td>
</tr>
<tr>
    <td><a href="#list_channel_namespaces"><CopyableCode code="list_channel_namespaces" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists the channel namespaces for a specified Api. ListChannelNamespaces returns only high level details for the channel namespace. To retrieve code handlers, use GetChannelNamespace.</td>
</tr>
<tr>
    <td><a href="#create_channel_namespace"><CopyableCode code="create_channel_namespace" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a ChannelNamespace for an Api.</td>
</tr>
<tr>
    <td><a href="#update_channel_namespace"><CopyableCode code="update_channel_namespace" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a ChannelNamespace associated with an Api.</td>
</tr>
<tr>
    <td><a href="#delete_channel_namespace"><CopyableCode code="delete_channel_namespace" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a ChannelNamespace.</td>
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
<tr id="parameter-api_id">
    <td><CopyableCode code="api_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Api associated with the ChannelNamespace.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the ChannelNamespace.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results that you want the request to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_channel_namespace"
    values={[
        { label: 'get_channel_namespace', value: 'get_channel_namespace' },
        { label: 'list_channel_namespaces', value: 'list_channel_namespaces' }
    ]}
>
<TabItem value="get_channel_namespace">

Retrieves the channel namespace for a specified Api.

```sql
SELECT
name,
api_id,
channel_namespace_arn,
code_handlers,
created,
handler_configs,
last_modified,
publish_auth_modes,
subscribe_auth_modes,
tags
FROM aws.appsync.channel_namespaces
WHERE api_id = '{{ api_id }}' -- required
AND name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_channel_namespaces">

Lists the channel namespaces for a specified Api. ListChannelNamespaces returns only high level details for the channel namespace. To retrieve code handlers, use GetChannelNamespace.

```sql
SELECT
name,
api_id,
channel_namespace_arn,
code_handlers,
created,
handler_configs,
last_modified,
publish_auth_modes,
subscribe_auth_modes,
tags
FROM aws.appsync.channel_namespaces
WHERE api_id = '{{ api_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_channel_namespace"
    values={[
        { label: 'create_channel_namespace', value: 'create_channel_namespace' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_channel_namespace">

Creates a ChannelNamespace for an Api.

```sql
INSERT INTO aws.appsync.channel_namespaces (
name,
subscribeAuthModes,
publishAuthModes,
codeHandlers,
tags,
handlerConfigs,
api_id,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ subscribeAuthModes }}',
'{{ publishAuthModes }}',
'{{ codeHandlers }}',
'{{ tags }}',
'{{ handlerConfigs }}',
'{{ api_id }}',
'{{ region }}'
RETURNING
channel_namespace
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: channel_namespaces
  props:
    - name: api_id
      value: "{{ api_id }}"
      description: Required parameter for the channel_namespaces resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the channel_namespaces resource.
    - name: name
      value: "{{ name }}"
    - name: subscribeAuthModes
      value:
        - authType: "{{ authType }}"
    - name: publishAuthModes
      value:
        - authType: "{{ authType }}"
    - name: codeHandlers
      value: "{{ codeHandlers }}"
    - name: tags
      value: "{{ tags }}"
      description: |
        A map with keys of TagKey objects and values of TagValue objects.
    - name: handlerConfigs
      description: |
        The configuration for the OnPublish and OnSubscribe handlers.
      value:
        onPublish:
          behavior: "{{ behavior }}"
          integration:
            dataSourceName: "{{ dataSourceName }}"
            lambdaConfig:
              invokeType: "{{ invokeType }}"
        onSubscribe:
          behavior: "{{ behavior }}"
          integration:
            dataSourceName: "{{ dataSourceName }}"
            lambdaConfig:
              invokeType: "{{ invokeType }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_channel_namespace"
    values={[
        { label: 'update_channel_namespace', value: 'update_channel_namespace' }
    ]}
>
<TabItem value="update_channel_namespace">

Updates a ChannelNamespace associated with an Api.

```sql
UPDATE aws.appsync.channel_namespaces
SET 
subscribeAuthModes = '{{ subscribeAuthModes }}',
publishAuthModes = '{{ publishAuthModes }}',
codeHandlers = '{{ codeHandlers }}',
handlerConfigs = '{{ handlerConfigs }}'
WHERE 
api_id = '{{ api_id }}' --required
AND name = '{{ name }}' --required
AND region = '{{ region }}' --required
RETURNING
channel_namespace;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_channel_namespace"
    values={[
        { label: 'delete_channel_namespace', value: 'delete_channel_namespace' }
    ]}
>
<TabItem value="delete_channel_namespace">

Deletes a ChannelNamespace.

```sql
DELETE FROM aws.appsync.channel_namespaces
WHERE api_id = '{{ api_id }}' --required
AND name = '{{ name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
