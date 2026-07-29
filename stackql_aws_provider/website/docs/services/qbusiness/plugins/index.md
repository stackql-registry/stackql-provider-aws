--- 
title: plugins
hide_title: false
hide_table_of_contents: false
keywords:
  - plugins
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

Creates, updates, deletes, gets or lists a <code>plugins</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="plugins" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.qbusiness.plugins" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_plugin"
    values={[
        { label: 'get_plugin', value: 'get_plugin' },
        { label: 'list_plugins', value: 'list_plugins' }
    ]}
>
<TabItem value="get_plugin">

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
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the application which contains the plugin. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-&#93;&#123;35&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="auth_configuration" /></td>
    <td><code>object</code></td>
    <td>Authentication configuration information for an Amazon Q Business plugin.</td>
</tr>
<tr>
    <td><CopyableCode code="build_status" /></td>
    <td><code>string</code></td>
    <td>The current status of a plugin. A plugin is modified asynchronously. (READY, CREATE_IN_PROGRESS, CREATE_FAILED, UPDATE_IN_PROGRESS, UPDATE_FAILED, DELETE_IN_PROGRESS, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the plugin was created.</td>
</tr>
<tr>
    <td><CopyableCode code="custom_plugin_configuration" /></td>
    <td><code>object</code></td>
    <td>Configuration information required to create a custom plugin.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The name of the plugin. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="plugin_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the role with permission to access resources needed to create the plugin. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="plugin_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the plugin. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="server_url" /></td>
    <td><code>string</code></td>
    <td>The source URL used for plugin configuration. (pattern: &lt;code&gt;(https?|ftp|file):​//(&#91;^\s&#93;*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the plugin. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the plugin. (SERVICE_NOW, SALESFORCE, JIRA, ZENDESK, CUSTOM, QUICKSIGHT, SERVICENOW_NOW_PLATFORM, JIRA_CLOUD, SALESFORCE_CRM, ZENDESK_SUITE, ATLASSIAN_CONFLUENCE, GOOGLE_CALENDAR, MICROSOFT_TEAMS, MICROSOFT_EXCHANGE, PAGERDUTY_ADVANCE, SMARTSHEET, ASANA)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the plugin was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_plugins">

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
    <td><CopyableCode code="build_status" /></td>
    <td><code>string</code></td>
    <td>The status of the plugin. (READY, CREATE_IN_PROGRESS, CREATE_FAILED, UPDATE_IN_PROGRESS, UPDATE_FAILED, DELETE_IN_PROGRESS, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the plugin was created.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The name of the plugin. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="plugin_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the plugin. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="server_url" /></td>
    <td><code>string</code></td>
    <td>The plugin server URL used for configuration. (pattern: &lt;code&gt;(https?|ftp|file):​//(&#91;^\s&#93;*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current status of the plugin. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the plugin. (SERVICE_NOW, SALESFORCE, JIRA, ZENDESK, CUSTOM, QUICKSIGHT, SERVICENOW_NOW_PLATFORM, JIRA_CLOUD, SALESFORCE_CRM, ZENDESK_SUITE, ATLASSIAN_CONFLUENCE, GOOGLE_CALENDAR, MICROSOFT_TEAMS, MICROSOFT_EXCHANGE, PAGERDUTY_ADVANCE, SMARTSHEET, ASANA)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the plugin was last updated.</td>
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
    <td><a href="#get_plugin"><CopyableCode code="get_plugin" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-plugin_id"><code>plugin_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about an existing Amazon Q Business plugin.</td>
</tr>
<tr>
    <td><a href="#list_plugins"><CopyableCode code="list_plugins" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists configured Amazon Q Business plugins.</td>
</tr>
<tr>
    <td><a href="#create_plugin"><CopyableCode code="create_plugin" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-authConfiguration"><code>authConfiguration</code></a></td>
    <td></td>
    <td>Creates an Amazon Q Business plugin.</td>
</tr>
<tr>
    <td><a href="#update_plugin"><CopyableCode code="update_plugin" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-plugin_id"><code>plugin_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an Amazon Q Business plugin.</td>
</tr>
<tr>
    <td><a href="#delete_plugin"><CopyableCode code="delete_plugin" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-plugin_id"><code>plugin_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon Q Business plugin.</td>
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
    <td>The identifier the application attached to the Amazon Q Business plugin.</td>
</tr>
<tr id="parameter-plugin_id">
    <td><CopyableCode code="plugin_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the plugin being deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of documents to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If the maxResults response was incomplete because there is more data to retrieve, Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of plugins.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_plugin"
    values={[
        { label: 'get_plugin', value: 'get_plugin' },
        { label: 'list_plugins', value: 'list_plugins' }
    ]}
>
<TabItem value="get_plugin">

Gets information about an existing Amazon Q Business plugin.

```sql
SELECT
application_id,
auth_configuration,
build_status,
created_at,
custom_plugin_configuration,
display_name,
plugin_arn,
plugin_id,
server_url,
state,
type_,
updated_at
FROM aws.qbusiness.plugins
WHERE application_id = '{{ application_id }}' -- required
AND plugin_id = '{{ plugin_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_plugins">

Lists configured Amazon Q Business plugins.

```sql
SELECT
build_status,
created_at,
display_name,
plugin_id,
server_url,
state,
type_,
updated_at
FROM aws.qbusiness.plugins
WHERE application_id = '{{ application_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_plugin"
    values={[
        { label: 'create_plugin', value: 'create_plugin' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_plugin">

Creates an Amazon Q Business plugin.

```sql
INSERT INTO aws.qbusiness.plugins (
displayName,
type,
authConfiguration,
serverUrl,
customPluginConfiguration,
tags,
clientToken,
application_id,
region
)
SELECT 
'{{ displayName }}' /* required */,
'{{ type }}' /* required */,
'{{ authConfiguration }}' /* required */,
'{{ serverUrl }}',
'{{ customPluginConfiguration }}',
'{{ tags }}',
'{{ clientToken }}',
'{{ application_id }}',
'{{ region }}'
RETURNING
build_status,
plugin_arn,
plugin_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: plugins
  props:
    - name: application_id
      value: "{{ application_id }}"
      description: Required parameter for the plugins resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the plugins resource.
    - name: displayName
      value: "{{ displayName }}"
    - name: type
      value: "{{ type }}"
      valid_values: ['SERVICE_NOW', 'SALESFORCE', 'JIRA', 'ZENDESK', 'CUSTOM', 'QUICKSIGHT', 'SERVICENOW_NOW_PLATFORM', 'JIRA_CLOUD', 'SALESFORCE_CRM', 'ZENDESK_SUITE', 'ATLASSIAN_CONFLUENCE', 'GOOGLE_CALENDAR', 'MICROSOFT_TEAMS', 'MICROSOFT_EXCHANGE', 'PAGERDUTY_ADVANCE', 'SMARTSHEET', 'ASANA']
    - name: authConfiguration
      description: |
        Authentication configuration information for an Amazon Q Business plugin.
      value:
        basicAuthConfiguration:
          secretArn: "{{ secretArn }}"
          roleArn: "{{ roleArn }}"
        oAuth2ClientCredentialConfiguration:
          secretArn: "{{ secretArn }}"
          roleArn: "{{ roleArn }}"
          authorizationUrl: "{{ authorizationUrl }}"
          tokenUrl: "{{ tokenUrl }}"
        noAuthConfiguration: "{{ noAuthConfiguration }}"
        idcAuthConfiguration:
          idcApplicationArn: "{{ idcApplicationArn }}"
          roleArn: "{{ roleArn }}"
    - name: serverUrl
      value: "{{ serverUrl }}"
    - name: customPluginConfiguration
      description: |
        Configuration information required to create a custom plugin.
      value:
        description: "{{ description }}"
        apiSchemaType: "{{ apiSchemaType }}"
        apiSchema:
          payload: "{{ payload }}"
          s3:
            bucket: "{{ bucket }}"
            key: "{{ key }}"
    - name: tags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_plugin"
    values={[
        { label: 'update_plugin', value: 'update_plugin' }
    ]}
>
<TabItem value="update_plugin">

Updates an Amazon Q Business plugin.

```sql
UPDATE aws.qbusiness.plugins
SET 
displayName = '{{ displayName }}',
state = '{{ state }}',
serverUrl = '{{ serverUrl }}',
customPluginConfiguration = '{{ customPluginConfiguration }}',
authConfiguration = '{{ authConfiguration }}'
WHERE 
application_id = '{{ application_id }}' --required
AND plugin_id = '{{ plugin_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_plugin"
    values={[
        { label: 'delete_plugin', value: 'delete_plugin' }
    ]}
>
<TabItem value="delete_plugin">

Deletes an Amazon Q Business plugin.

```sql
DELETE FROM aws.qbusiness.plugins
WHERE application_id = '{{ application_id }}' --required
AND plugin_id = '{{ plugin_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
