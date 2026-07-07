--- 
title: applications
hide_title: false
hide_table_of_contents: false
keywords:
  - applications
  - appintegrations
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

Creates, updates, deletes, gets or lists an <code>applications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="applications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appintegrations.applications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_application"
    values={[
        { label: 'get_application', value: 'get_application' },
        { label: 'list_applications', value: 'list_applications' }
    ]}
>
<TabItem value="get_application">

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
    <td><CopyableCode code="ApplicationConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration settings for the application.</td>
</tr>
<tr>
    <td><CopyableCode code="ApplicationSourceConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration for where the application should be loaded from.</td>
</tr>
<tr>
    <td><CopyableCode code="ApplicationType" /></td>
    <td><code>string</code></td>
    <td>The type of application (STANDARD, SERVICE, MCP_SERVER)</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Application. (pattern: &lt;code&gt;^arn:aws:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.-&#93;&#123;0,1023&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The created time of the Application.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the application. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the Application. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="IframeConfig" /></td>
    <td><code>object</code></td>
    <td>The iframe configuration for the application.</td>
</tr>
<tr>
    <td><CopyableCode code="InitializationTimeout" /></td>
    <td><code>integer</code></td>
    <td>The maximum time in milliseconds allowed to establish a connection with the workspace.</td>
</tr>
<tr>
    <td><CopyableCode code="IsService" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the application is a service.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last modified time of the Application.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the application. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\/\._ \-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Namespace" /></td>
    <td><code>string</code></td>
    <td>The namespace of the application. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\/\._\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Permissions" /></td>
    <td><code>array</code></td>
    <td>The configuration of events or requests that the application has access to.</td>
</tr>
<tr>
    <td><CopyableCode code="Publications" /></td>
    <td><code>array</code></td>
    <td>The events that the application publishes.</td>
</tr>
<tr>
    <td><CopyableCode code="Subscriptions" /></td>
    <td><code>array</code></td>
    <td>The events that the application subscribes.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource. For example, &#123; "tags": &#123;"key1":"value1", "key2":"value2"&#125; &#125;.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_applications">

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
    <td><CopyableCode code="ApplicationType" /></td>
    <td><code>string</code></td>
    <td>The type of application (STANDARD, SERVICE, MCP_SERVER)</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Application. (pattern: &lt;code&gt;^arn:aws:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.-&#93;&#123;0,1023&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the application was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the Application. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="IsService" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the application is a service.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the application was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the application. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\/\._ \-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Namespace" /></td>
    <td><code>string</code></td>
    <td>The namespace of the application. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\/\._\-&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#get_application"><CopyableCode code="get_application" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_identifier"><code>application_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get an Application resource.</td>
</tr>
<tr>
    <td><a href="#list_applications"><CopyableCode code="list_applications" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-applicationType"><code>applicationType</code></a></td>
    <td>Lists applications in the account.</td>
</tr>
<tr>
    <td><a href="#create_application"><CopyableCode code="create_application" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ApplicationSourceConfig"><code>ApplicationSourceConfig</code></a></td>
    <td></td>
    <td>Creates and persists an Application resource.</td>
</tr>
<tr>
    <td><a href="#update_application"><CopyableCode code="update_application" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-application_identifier"><code>application_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates and persists an Application resource.</td>
</tr>
<tr>
    <td><a href="#delete_application"><CopyableCode code="delete_application" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-application_identifier"><code>application_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the Application. Only Applications that don't have any Application Associations can be deleted.</td>
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
<tr id="parameter-application_identifier">
    <td><CopyableCode code="application_identifier" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Application.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-applicationType">
    <td><CopyableCode code="applicationType" /></td>
    <td><code>string</code></td>
    <td>The type of application.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_application"
    values={[
        { label: 'get_application', value: 'get_application' },
        { label: 'list_applications', value: 'list_applications' }
    ]}
>
<TabItem value="get_application">

Get an Application resource.

```sql
SELECT
ApplicationConfig,
ApplicationSourceConfig,
ApplicationType,
Arn,
CreatedTime,
Description,
Id,
IframeConfig,
InitializationTimeout,
IsService,
LastModifiedTime,
Name,
Namespace,
Permissions,
Publications,
Subscriptions,
Tags
FROM aws.appintegrations.applications
WHERE application_identifier = '{{ application_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_applications">

Lists applications in the account.

```sql
SELECT
ApplicationType,
Arn,
CreatedTime,
Id,
IsService,
LastModifiedTime,
Name,
Namespace
FROM aws.appintegrations.applications
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND applicationType = '{{ applicationType }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_application"
    values={[
        { label: 'create_application', value: 'create_application' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_application">

Creates and persists an Application resource.

```sql
INSERT INTO aws.appintegrations.applications (
Name,
Namespace,
Description,
ApplicationSourceConfig,
Subscriptions,
Publications,
ClientToken,
Tags,
Permissions,
IsService,
InitializationTimeout,
ApplicationConfig,
IframeConfig,
ApplicationType,
region
)
SELECT 
'{{ Name }}',
'{{ Namespace }}',
'{{ Description }}',
'{{ ApplicationSourceConfig }}' /* required */,
'{{ Subscriptions }}',
'{{ Publications }}',
'{{ ClientToken }}',
'{{ Tags }}',
'{{ Permissions }}',
{{ IsService }},
{{ InitializationTimeout }},
'{{ ApplicationConfig }}',
'{{ IframeConfig }}',
'{{ ApplicationType }}',
'{{ region }}'
RETURNING
Arn,
Id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: applications
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the applications resource.
    - name: Name
      value: "{{ Name }}"
    - name: Namespace
      value: "{{ Namespace }}"
    - name: Description
      value: "{{ Description }}"
    - name: ApplicationSourceConfig
      description: |
        The configuration for where the application should be loaded from.
      value:
        ExternalUrlConfig:
          AccessUrl: "{{ AccessUrl }}"
          ApprovedOrigins:
            - "{{ ApprovedOrigins }}"
    - name: Subscriptions
      value:
        - Event: "{{ Event }}"
          Description: "{{ Description }}"
    - name: Publications
      value:
        - Event: "{{ Event }}"
          Schema: "{{ Schema }}"
          Description: "{{ Description }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: Tags
      value: "{{ Tags }}"
    - name: Permissions
      value:
        - "{{ Permissions }}"
    - name: IsService
      value: {{ IsService }}
    - name: InitializationTimeout
      value: {{ InitializationTimeout }}
    - name: ApplicationConfig
      description: |
        The configuration settings for the application.
      value:
        ContactHandling:
          Scope: "{{ Scope }}"
    - name: IframeConfig
      description: |
        The iframe configuration for the application.
      value:
        Allow:
          - "{{ Allow }}"
        Sandbox:
          - "{{ Sandbox }}"
    - name: ApplicationType
      value: "{{ ApplicationType }}"
      description: |
        The type of application
      valid_values: ['STANDARD', 'SERVICE', 'MCP_SERVER']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_application"
    values={[
        { label: 'update_application', value: 'update_application' }
    ]}
>
<TabItem value="update_application">

Updates and persists an Application resource.

```sql
UPDATE aws.appintegrations.applications
SET 
Name = '{{ Name }}',
Description = '{{ Description }}',
ApplicationSourceConfig = '{{ ApplicationSourceConfig }}',
Subscriptions = '{{ Subscriptions }}',
Publications = '{{ Publications }}',
Permissions = '{{ Permissions }}',
IsService = {{ IsService }},
InitializationTimeout = {{ InitializationTimeout }},
ApplicationConfig = '{{ ApplicationConfig }}',
IframeConfig = '{{ IframeConfig }}',
ApplicationType = '{{ ApplicationType }}'
WHERE 
application_identifier = '{{ application_identifier }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_application"
    values={[
        { label: 'delete_application', value: 'delete_application' }
    ]}
>
<TabItem value="delete_application">

Deletes the Application. Only Applications that don't have any Application Associations can be deleted.

```sql
DELETE FROM aws.appintegrations.applications
WHERE application_identifier = '{{ application_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
