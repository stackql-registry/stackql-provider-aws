--- 
title: chat_response_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - chat_response_configurations
  - qbusiness
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

Creates, updates, deletes, gets or lists a <code>chat_response_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="chat_response_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.qbusiness.chat_response_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_chat_response_configuration"
    values={[
        { label: 'get_chat_response_configuration', value: 'get_chat_response_configuration' },
        { label: 'list_chat_response_configurations', value: 'list_chat_response_configurations' }
    ]}
>
<TabItem value="get_chat_response_configuration">

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
    <td><CopyableCode code="chat_response_configuration_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the retrieved chat response configuration, which uniquely identifies the resource across all Amazon Web Services services. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="chat_response_configuration_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the retrieved chat response configuration. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-&#93;&#123;35&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp indicating when the chat response configuration was initially created.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The human-readable name of the retrieved chat response configuration, making it easier to identify among multiple configurations.</td>
</tr>
<tr>
    <td><CopyableCode code="in_use_configuration" /></td>
    <td><code>object</code></td>
    <td>The currently active configuration settings that are being used to generate responses in the Amazon Q Business application.</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_configuration" /></td>
    <td><code>object</code></td>
    <td>Information about the most recent update to the configuration, including timestamp and modification details.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_chat_response_configurations">

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
    <td><CopyableCode code="chat_response_configuration_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the chat response configuration, which uniquely identifies the resource across all Amazon Web Services services and accounts. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="chat_response_configuration_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for your chat response configuration settings, used to reference and manage the configuration within the Amazon Q Business service. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-&#93;&#123;35&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp indicating when the chat response configuration was initially created, useful for tracking the lifecycle of configuration resources.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>A human-readable name for the chat response configuration, making it easier to identify and manage multiple configurations within an organization.</td>
</tr>
<tr>
    <td><CopyableCode code="response_configuration_summary" /></td>
    <td><code>string</code></td>
    <td>A summary of the response configuration settings, providing a concise overview of the key parameters that define how responses are generated and formatted.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the chat response configuration, indicating whether it is active, pending, or in another state that affects its availability for use in chat interactions. (CREATING, UPDATING, FAILED, ACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp indicating when the chat response configuration was last modified, helping administrators track changes and maintain version awareness.</td>
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
    <td><a href="#get_chat_response_configuration"><CopyableCode code="get_chat_response_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-chat_response_configuration_id"><code>chat_response_configuration_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information about a specific chat response configuration from an Amazon Q Business application. This operation returns the complete configuration settings and metadata.</td>
</tr>
<tr>
    <td><a href="#list_chat_response_configurations"><CopyableCode code="list_chat_response_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieves a list of all chat response configurations available in a specified Amazon Q Business application. This operation returns summary information about each configuration to help administrators manage and select appropriate response settings.</td>
</tr>
<tr>
    <td><a href="#create_chat_response_configuration"><CopyableCode code="create_chat_response_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-responseConfigurations"><code>responseConfigurations</code></a></td>
    <td></td>
    <td>Creates a new chat response configuration for an Amazon Q Business application. This operation establishes a set of parameters that define how the system generates and formats responses to user queries in chat interactions.</td>
</tr>
<tr>
    <td><a href="#update_chat_response_configuration"><CopyableCode code="update_chat_response_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-chat_response_configuration_id"><code>chat_response_configuration_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-responseConfigurations"><code>responseConfigurations</code></a></td>
    <td></td>
    <td>Updates an existing chat response configuration in an Amazon Q Business application. This operation allows administrators to modify configuration settings, display name, and response parameters to refine how the system generates responses.</td>
</tr>
<tr>
    <td><a href="#delete_chat_response_configuration"><CopyableCode code="delete_chat_response_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-chat_response_configuration_id"><code>chat_response_configuration_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a specified chat response configuration from an Amazon Q Business application.</td>
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
<tr id="parameter-application_id">
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of theAmazon Q Business application from which to delete the chat response configuration.</td>
</tr>
<tr id="parameter-chat_response_configuration_id">
    <td><CopyableCode code="chat_response_configuration_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the chat response configuration to delete from the specified application.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of chat response configurations to return in a single response. This parameter helps control pagination of results when many configurations exist.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token used to retrieve the next set of results when the number of configurations exceeds the specified maxResults value.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_chat_response_configuration"
    values={[
        { label: 'get_chat_response_configuration', value: 'get_chat_response_configuration' },
        { label: 'list_chat_response_configurations', value: 'list_chat_response_configurations' }
    ]}
>
<TabItem value="get_chat_response_configuration">

Retrieves detailed information about a specific chat response configuration from an Amazon Q Business application. This operation returns the complete configuration settings and metadata.

```sql
SELECT
chat_response_configuration_arn,
chat_response_configuration_id,
created_at,
display_name,
in_use_configuration,
last_update_configuration
FROM aws.qbusiness.chat_response_configurations
WHERE application_id = '{{ application_id }}' -- required
AND chat_response_configuration_id = '{{ chat_response_configuration_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_chat_response_configurations">

Retrieves a list of all chat response configurations available in a specified Amazon Q Business application. This operation returns summary information about each configuration to help administrators manage and select appropriate response settings.

```sql
SELECT
chat_response_configuration_arn,
chat_response_configuration_id,
created_at,
display_name,
response_configuration_summary,
status,
updated_at
FROM aws.qbusiness.chat_response_configurations
WHERE application_id = '{{ application_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_chat_response_configuration"
    values={[
        { label: 'create_chat_response_configuration', value: 'create_chat_response_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_chat_response_configuration">

Creates a new chat response configuration for an Amazon Q Business application. This operation establishes a set of parameters that define how the system generates and formats responses to user queries in chat interactions.

```sql
INSERT INTO aws.qbusiness.chat_response_configurations (
displayName,
clientToken,
responseConfigurations,
tags,
application_id,
region
)
SELECT 
'{{ displayName }}' /* required */,
'{{ clientToken }}',
'{{ responseConfigurations }}' /* required */,
'{{ tags }}',
'{{ application_id }}',
'{{ region }}'
RETURNING
chat_response_configuration_arn,
chat_response_configuration_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: chat_response_configurations
  props:
    - name: application_id
      value: "{{ application_id }}"
      description: Required parameter for the chat_response_configurations resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the chat_response_configurations resource.
    - name: displayName
      value: "{{ displayName }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: responseConfigurations
      value: "{{ responseConfigurations }}"
    - name: tags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_chat_response_configuration"
    values={[
        { label: 'update_chat_response_configuration', value: 'update_chat_response_configuration' }
    ]}
>
<TabItem value="update_chat_response_configuration">

Updates an existing chat response configuration in an Amazon Q Business application. This operation allows administrators to modify configuration settings, display name, and response parameters to refine how the system generates responses.

```sql
UPDATE aws.qbusiness.chat_response_configurations
SET 
displayName = '{{ displayName }}',
responseConfigurations = '{{ responseConfigurations }}',
clientToken = '{{ clientToken }}'
WHERE 
application_id = '{{ application_id }}' --required
AND chat_response_configuration_id = '{{ chat_response_configuration_id }}' --required
AND region = '{{ region }}' --required
AND responseConfigurations = '{{ responseConfigurations }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_chat_response_configuration"
    values={[
        { label: 'delete_chat_response_configuration', value: 'delete_chat_response_configuration' }
    ]}
>
<TabItem value="delete_chat_response_configuration">

Deletes a specified chat response configuration from an Amazon Q Business application.

```sql
DELETE FROM aws.qbusiness.chat_response_configurations
WHERE application_id = '{{ application_id }}' --required
AND chat_response_configuration_id = '{{ chat_response_configuration_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
