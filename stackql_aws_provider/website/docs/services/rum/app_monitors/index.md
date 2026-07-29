--- 
title: app_monitors
hide_title: false
hide_table_of_contents: false
keywords:
  - app_monitors
  - rum
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

Creates, updates, deletes, gets or lists an <code>app_monitors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="app_monitors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rum.app_monitors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_app_monitor"
    values={[
        { label: 'get_app_monitor', value: 'get_app_monitor' },
        { label: 'list_app_monitors', value: 'list_app_monitors' }
    ]}
>
<TabItem value="get_app_monitor">

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
    <td><CopyableCode code="app_monitor_configuration" /></td>
    <td><code>object</code></td>
    <td>This structure contains much of the configuration data for the app monitor.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string</code></td>
    <td>The date and time that this app monitor was created.</td>
</tr>
<tr>
    <td><CopyableCode code="custom_events" /></td>
    <td><code>object</code></td>
    <td>A structure that contains information about custom events for this app monitor.</td>
</tr>
<tr>
    <td><CopyableCode code="data_storage" /></td>
    <td><code>object</code></td>
    <td>A structure that contains information about whether this app monitor stores a copy of the telemetry data that RUM collects using CloudWatch Logs.</td>
</tr>
<tr>
    <td><CopyableCode code="deobfuscation_configuration" /></td>
    <td><code>object</code></td>
    <td>A structure that contains the configuration for how an app monitor can deobfuscate stack traces.</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The top-level internet domain name for which your application has administrative authority. (pattern: &lt;code&gt;(localhost)$|^((25&#91;0-5&#93;|2&#91;0-4&#93;&#91;0-9&#93;|&#91;01&#93;?&#91;0-9&#93;&#91;0-9&#93;?)\.)&#123;3&#125;(25&#91;0-5&#93;|2&#91;0-4&#93;&#91;0-9&#93;|&#91;01&#93;?&#91;0-9&#93;&#91;0-9&#93;?)$|(?=^&#91;a-zA-Z0-9\.\*-&#93;&#123;4,253&#125;$)(?!.*\.-)(?!.*-\.)(?!.*\.\.)(?!.*&#91;^\.&#93;&#123;64,&#125;)^(\*\.)?(?!&#91;-\.\*&#93;)&#91;^\*&#93;&#123;1,&#125;\.(\*|(?!.*--)(?=.*&#91;a-zA-Z&#93;)&#91;^\*&#93;&#123;1,&#125;&#91;^\*-&#93;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domain_list" /></td>
    <td><code>array</code></td>
    <td>List the domain names for which your application has administrative authority.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of this app monitor. (pattern: &lt;code&gt;&#91;a-fA-F0-9&#93;&#123;8&#125;-&#91;a-fA-F0-9&#93;&#123;4&#125;-&#91;a-fA-F0-9&#93;&#123;4&#125;-&#91;a-fA-F0-9&#93;&#123;4&#125;-&#91;a-fA-F0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified" /></td>
    <td><code>string</code></td>
    <td>The date and time of the most recent changes to this app monitor's configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the app monitor. (pattern: &lt;code&gt;(?!\.)&#91;\.\-_#A-Za-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="platform" /></td>
    <td><code>string</code></td>
    <td>The platform type for this app monitor. Valid values are Web for web applications , Android for Android applications, and iOS for IOS applications. (Web, Android, iOS)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the app monitor. (CREATED, DELETING, ACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The list of tag keys and values associated with this app monitor.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_app_monitors">

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
    <td><CopyableCode code="created" /></td>
    <td><code>string</code></td>
    <td>The date and time that the app monitor was created.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of this app monitor. (pattern: &lt;code&gt;&#91;a-fA-F0-9&#93;&#123;8&#125;-&#91;a-fA-F0-9&#93;&#123;4&#125;-&#91;a-fA-F0-9&#93;&#123;4&#125;-&#91;a-fA-F0-9&#93;&#123;4&#125;-&#91;a-fA-F0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified" /></td>
    <td><code>string</code></td>
    <td>The date and time of the most recent changes to this app monitor's configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of this app monitor. (pattern: &lt;code&gt;(?!\.)&#91;\.\-_#A-Za-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="platform" /></td>
    <td><code>string</code></td>
    <td>The platform type for this app monitor. Valid values are Web for web applications, Android for Android applications, and iOS for IOS applications. (Web, Android, iOS)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of this app monitor. (CREATED, DELETING, ACTIVE)</td>
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
    <td><a href="#get_app_monitor"><CopyableCode code="get_app_monitor" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the complete configuration information for one app monitor.</td>
</tr>
<tr>
    <td><a href="#list_app_monitors"><CopyableCode code="list_app_monitors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of the Amazon CloudWatch RUM app monitors in the account.</td>
</tr>
<tr>
    <td><a href="#create_app_monitor"><CopyableCode code="create_app_monitor" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a Amazon CloudWatch RUM app monitor, which collects telemetry data from your application and sends that data to RUM. The data includes performance and reliability information such as page load time, client-side errors, and user behavior. You use this operation only to create a new app monitor. To update an existing app monitor, use UpdateAppMonitor instead. After you create an app monitor, sign in to the CloudWatch RUM console to get the JavaScript code snippet to add to your web application. For more information, see How do I find a code snippet that I've already generated?</td>
</tr>
<tr>
    <td><a href="#update_app_monitor"><CopyableCode code="update_app_monitor" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the configuration of an existing app monitor. When you use this operation, only the parts of the app monitor configuration that you specify in this operation are changed. For any parameters that you omit, the existing values are kept. You can't use this operation to change the tags of an existing app monitor. To change the tags of an existing app monitor, use TagResource. To create a new app monitor, use CreateAppMonitor. After you update an app monitor, sign in to the CloudWatch RUM console to get the updated JavaScript code snippet to add to your web application. For more information, see How do I find a code snippet that I've already generated?</td>
</tr>
<tr>
    <td><a href="#delete_app_monitor"><CopyableCode code="delete_app_monitor" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing app monitor. This immediately stops the collection of data.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the app monitor to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in one operation. The default is 50. The maximum that you can specify is 100.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Use the token returned by the previous operation to request the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_app_monitor"
    values={[
        { label: 'get_app_monitor', value: 'get_app_monitor' },
        { label: 'list_app_monitors', value: 'list_app_monitors' }
    ]}
>
<TabItem value="get_app_monitor">

Retrieves the complete configuration information for one app monitor.

```sql
SELECT
app_monitor_configuration,
created,
custom_events,
data_storage,
deobfuscation_configuration,
domain,
domain_list,
id,
last_modified,
name,
platform,
state,
tags
FROM aws.rum.app_monitors
WHERE name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_app_monitors">

Returns a list of the Amazon CloudWatch RUM app monitors in the account.

```sql
SELECT
created,
id,
last_modified,
name,
platform,
state
FROM aws.rum.app_monitors
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_app_monitor"
    values={[
        { label: 'create_app_monitor', value: 'create_app_monitor' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_app_monitor">

Creates a Amazon CloudWatch RUM app monitor, which collects telemetry data from your application and sends that data to RUM. The data includes performance and reliability information such as page load time, client-side errors, and user behavior. You use this operation only to create a new app monitor. To update an existing app monitor, use UpdateAppMonitor instead. After you create an app monitor, sign in to the CloudWatch RUM console to get the JavaScript code snippet to add to your web application. For more information, see How do I find a code snippet that I've already generated?

```sql
INSERT INTO aws.rum.app_monitors (
Name,
Domain,
DomainList,
Tags,
AppMonitorConfiguration,
CwLogEnabled,
CustomEvents,
DeobfuscationConfiguration,
Platform,
region
)
SELECT 
'{{ Name }}',
'{{ Domain }}',
'{{ DomainList }}',
'{{ Tags }}',
'{{ AppMonitorConfiguration }}',
{{ CwLogEnabled }},
'{{ CustomEvents }}',
'{{ DeobfuscationConfiguration }}',
'{{ Platform }}',
'{{ region }}'
RETURNING
id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: app_monitors
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the app_monitors resource.
    - name: Name
      value: "{{ Name }}"
    - name: Domain
      value: "{{ Domain }}"
    - name: DomainList
      value:
        - "{{ DomainList }}"
    - name: Tags
      value: "{{ Tags }}"
    - name: AppMonitorConfiguration
      description: |
        This structure contains much of the configuration data for the app monitor.
      value:
        IdentityPoolId: "{{ IdentityPoolId }}"
        ExcludedPages:
          - "{{ ExcludedPages }}"
        IncludedPages:
          - "{{ IncludedPages }}"
        FavoritePages:
          - "{{ FavoritePages }}"
        SessionSampleRate: {{ SessionSampleRate }}
        GuestRoleArn: "{{ GuestRoleArn }}"
        AllowCookies: {{ AllowCookies }}
        Telemetries:
          - "{{ Telemetries }}"
        EnableXRay: {{ EnableXRay }}
    - name: CwLogEnabled
      value: {{ CwLogEnabled }}
    - name: CustomEvents
      description: |
        A structure that contains information about custom events for this app monitor.
      value:
        Status: "{{ Status }}"
    - name: DeobfuscationConfiguration
      description: |
        A structure that contains the configuration for how an app monitor can deobfuscate stack traces.
      value:
        JavaScriptSourceMaps:
          Status: "{{ Status }}"
          S3Uri: "{{ S3Uri }}"
    - name: Platform
      value: "{{ Platform }}"
      valid_values: ['Web', 'Android', 'iOS']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_app_monitor"
    values={[
        { label: 'update_app_monitor', value: 'update_app_monitor' }
    ]}
>
<TabItem value="update_app_monitor">

Updates the configuration of an existing app monitor. When you use this operation, only the parts of the app monitor configuration that you specify in this operation are changed. For any parameters that you omit, the existing values are kept. You can't use this operation to change the tags of an existing app monitor. To change the tags of an existing app monitor, use TagResource. To create a new app monitor, use CreateAppMonitor. After you update an app monitor, sign in to the CloudWatch RUM console to get the updated JavaScript code snippet to add to your web application. For more information, see How do I find a code snippet that I've already generated?

```sql
UPDATE aws.rum.app_monitors
SET 
Domain = '{{ Domain }}',
DomainList = '{{ DomainList }}',
AppMonitorConfiguration = '{{ AppMonitorConfiguration }}',
CwLogEnabled = {{ CwLogEnabled }},
CustomEvents = '{{ CustomEvents }}',
DeobfuscationConfiguration = '{{ DeobfuscationConfiguration }}'
WHERE 
name = '{{ name }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_app_monitor"
    values={[
        { label: 'delete_app_monitor', value: 'delete_app_monitor' }
    ]}
>
<TabItem value="delete_app_monitor">

Deletes an existing app monitor. This immediately stops the collection of data.

```sql
DELETE FROM aws.rum.app_monitors
WHERE name = '{{ name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
