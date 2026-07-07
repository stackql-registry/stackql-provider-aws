--- 
title: environments
hide_title: false
hide_table_of_contents: false
keywords:
  - environments
  - workspaces_thin_client
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

Creates, updates, deletes, gets or lists an <code>environments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="environments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workspaces_thin_client.environments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_environment"
    values={[
        { label: 'get_environment', value: 'get_environment' },
        { label: 'list_environments', value: 'list_environments' }
    ]}
>
<TabItem value="get_environment">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the environment. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;9&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the environment. (pattern: &lt;code&gt;$|^&#91;0-9\p&#123;IsAlphabetic&#125;+:,.@'" -&#93;&#91;0-9\p&#123;IsAlphabetic&#125;+=:,.@'" -&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="activationCode" /></td>
    <td><code>string</code></td>
    <td>The activation code to register a device to the environment. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;&#91;a-z0-9&#93;&#123;6&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the environment. (pattern: &lt;code&gt;arn:&#91;\w+=\/,.@-&#93;+:&#91;a-zA-Z0-9\-&#93;+:&#91;a-zA-Z0-9\-&#93;*:&#91;0-9&#93;&#123;0,12&#125;:&#91;a-zA-Z0-9\-\/\._&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the environment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="desiredSoftwareSetId" /></td>
    <td><code>string</code></td>
    <td>The ID of the software set to apply. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;1,9&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="desktopArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the desktop to stream from Amazon WorkSpaces, WorkSpaces Secure Browser, or AppStream 2.0. (pattern: &lt;code&gt;arn:&#91;\w+=\/,.@-&#93;+:&#91;a-zA-Z0-9\-&#93;+:&#91;a-zA-Z0-9\-&#93;*:&#91;0-9&#93;&#123;0,12&#125;:&#91;a-zA-Z0-9\-\/\._&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="desktopEndpoint" /></td>
    <td><code>string</code></td>
    <td>The URL for the identity provider login (only for environments that use AppStream 2.0). (pattern: &lt;code&gt;(https:\/\/)&#91;a-z0-9&#93;+(&#91;\-\.&#93;&#123;1&#125;&#91;a-z0-9&#93;+)*\.&#91;a-z&#93;&#123;2,32&#125;(:&#91;0-9&#93;&#123;1,5&#125;)?(\/.*)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="desktopType" /></td>
    <td><code>string</code></td>
    <td>The type of streaming desktop for the environment. (workspaces, appstream, workspaces-web)</td>
</tr>
<tr>
    <td><CopyableCode code="deviceCreationTags" /></td>
    <td><code>object</code></td>
    <td>The tag keys and optional values for the newly created devices for this environment.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Key Management Service key used to encrypt the environment. (pattern: &lt;code&gt;arn:&#91;\w+=\/,.@-&#93;+:kms:&#91;a-zA-Z0-9\-&#93;*:&#91;0-9&#93;&#123;0,12&#125;:key\/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceWindow" /></td>
    <td><code>object</code></td>
    <td>Describes the maintenance window for a thin client device.</td>
</tr>
<tr>
    <td><CopyableCode code="pendingSoftwareSetId" /></td>
    <td><code>string</code></td>
    <td>The ID of the software set that is pending to be installed. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;1,9&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pendingSoftwareSetVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the software set that is pending to be installed.</td>
</tr>
<tr>
    <td><CopyableCode code="registeredDevicesCount" /></td>
    <td><code>integer</code></td>
    <td>The number of devices registered to the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="softwareSetComplianceStatus" /></td>
    <td><code>string</code></td>
    <td>Describes if the software currently installed on all devices in the environment is a supported version. (NO_REGISTERED_DEVICES, COMPLIANT, NOT_COMPLIANT)</td>
</tr>
<tr>
    <td><CopyableCode code="softwareSetUpdateMode" /></td>
    <td><code>string</code></td>
    <td>An option to define which software updates to apply. (USE_LATEST, USE_DESIRED)</td>
</tr>
<tr>
    <td><CopyableCode code="softwareSetUpdateSchedule" /></td>
    <td><code>string</code></td>
    <td>An option to define if software updates should be applied within a maintenance window. (USE_MAINTENANCE_WINDOW, APPLY_IMMEDIATELY)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the device was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_environments">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the environment. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;9&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the environment. (pattern: &lt;code&gt;$|^&#91;0-9\p&#123;IsAlphabetic&#125;+:,.@'" -&#93;&#91;0-9\p&#123;IsAlphabetic&#125;+=:,.@'" -&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="activationCode" /></td>
    <td><code>string</code></td>
    <td>The activation code to register a device to the environment. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;&#91;a-z0-9&#93;&#123;6&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the environment. (pattern: &lt;code&gt;arn:&#91;\w+=\/,.@-&#93;+:&#91;a-zA-Z0-9\-&#93;+:&#91;a-zA-Z0-9\-&#93;*:&#91;0-9&#93;&#123;0,12&#125;:&#91;a-zA-Z0-9\-\/\._&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the environment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="desiredSoftwareSetId" /></td>
    <td><code>string</code></td>
    <td>The ID of the software set to apply. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;1,9&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="desktopArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the desktop to stream from Amazon WorkSpaces, WorkSpaces Secure Browser, or AppStream 2.0. (pattern: &lt;code&gt;arn:&#91;\w+=\/,.@-&#93;+:&#91;a-zA-Z0-9\-&#93;+:&#91;a-zA-Z0-9\-&#93;*:&#91;0-9&#93;&#123;0,12&#125;:&#91;a-zA-Z0-9\-\/\._&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="desktopEndpoint" /></td>
    <td><code>string</code></td>
    <td>The URL for the identity provider login (only for environments that use AppStream 2.0). (pattern: &lt;code&gt;(https:\/\/)&#91;a-z0-9&#93;+(&#91;\-\.&#93;&#123;1&#125;&#91;a-z0-9&#93;+)*\.&#91;a-z&#93;&#123;2,32&#125;(:&#91;0-9&#93;&#123;1,5&#125;)?(\/.*)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="desktopType" /></td>
    <td><code>string</code></td>
    <td>The type of streaming desktop for the environment. (workspaces, appstream, workspaces-web)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceWindow" /></td>
    <td><code>object</code></td>
    <td>Describes the maintenance window for a thin client device.</td>
</tr>
<tr>
    <td><CopyableCode code="pendingSoftwareSetId" /></td>
    <td><code>string</code></td>
    <td>The ID of the software set that is pending to be installed. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;1,9&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="softwareSetUpdateMode" /></td>
    <td><code>string</code></td>
    <td>An option to define which software updates to apply. (USE_LATEST, USE_DESIRED)</td>
</tr>
<tr>
    <td><CopyableCode code="softwareSetUpdateSchedule" /></td>
    <td><code>string</code></td>
    <td>An option to define if software updates should be applied within a maintenance window. (USE_MAINTENANCE_WINDOW, APPLY_IMMEDIATELY)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the device was updated.</td>
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
    <td><a href="#get_environment"><CopyableCode code="get_environment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information for an environment.</td>
</tr>
<tr>
    <td><a href="#list_environments"><CopyableCode code="list_environments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns a list of environments.</td>
</tr>
<tr>
    <td><a href="#create_environment"><CopyableCode code="create_environment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-desktopArn"><code>desktopArn</code></a></td>
    <td></td>
    <td>Creates an environment for your thin client devices.</td>
</tr>
<tr>
    <td><a href="#update_environment"><CopyableCode code="update_environment" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an environment.</td>
</tr>
<tr>
    <td><a href="#delete_environment"><CopyableCode code="delete_environment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Deletes an environment.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the environment to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value. If you don't provide this value, then Amazon Web Services generates a random one for you. If you retry the operation with the same ClientToken, but with different parameters, the retry fails with an IdempotentParameterMismatch error.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results that are returned per call. You can use nextToken to obtain further pages of results. This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_environment"
    values={[
        { label: 'get_environment', value: 'get_environment' },
        { label: 'list_environments', value: 'list_environments' }
    ]}
>
<TabItem value="get_environment">

Returns information for an environment.

```sql
SELECT
id,
name,
activationCode,
arn,
createdAt,
desiredSoftwareSetId,
desktopArn,
desktopEndpoint,
desktopType,
deviceCreationTags,
kmsKeyArn,
maintenanceWindow,
pendingSoftwareSetId,
pendingSoftwareSetVersion,
registeredDevicesCount,
softwareSetComplianceStatus,
softwareSetUpdateMode,
softwareSetUpdateSchedule,
updatedAt
FROM aws.workspaces_thin_client.environments
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_environments">

Returns a list of environments.

```sql
SELECT
id,
name,
activationCode,
arn,
createdAt,
desiredSoftwareSetId,
desktopArn,
desktopEndpoint,
desktopType,
maintenanceWindow,
pendingSoftwareSetId,
softwareSetUpdateMode,
softwareSetUpdateSchedule,
updatedAt
FROM aws.workspaces_thin_client.environments
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_environment"
    values={[
        { label: 'create_environment', value: 'create_environment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_environment">

Creates an environment for your thin client devices.

```sql
INSERT INTO aws.workspaces_thin_client.environments (
name,
desktopArn,
desktopEndpoint,
softwareSetUpdateSchedule,
maintenanceWindow,
softwareSetUpdateMode,
desiredSoftwareSetId,
kmsKeyArn,
clientToken,
tags,
deviceCreationTags,
region
)
SELECT 
'{{ name }}',
'{{ desktopArn }}' /* required */,
'{{ desktopEndpoint }}',
'{{ softwareSetUpdateSchedule }}',
'{{ maintenanceWindow }}',
'{{ softwareSetUpdateMode }}',
'{{ desiredSoftwareSetId }}',
'{{ kmsKeyArn }}',
'{{ clientToken }}',
'{{ tags }}',
'{{ deviceCreationTags }}',
'{{ region }}'
RETURNING
environment
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: environments
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the environments resource.
    - name: name
      value: "{{ name }}"
    - name: desktopArn
      value: "{{ desktopArn }}"
    - name: desktopEndpoint
      value: "{{ desktopEndpoint }}"
    - name: softwareSetUpdateSchedule
      value: "{{ softwareSetUpdateSchedule }}"
      valid_values: ['USE_MAINTENANCE_WINDOW', 'APPLY_IMMEDIATELY']
    - name: maintenanceWindow
      description: |
        Describes the maintenance window for a thin client device.
      value:
        type_: "{{ type_ }}"
        startTimeHour: {{ startTimeHour }}
        startTimeMinute: {{ startTimeMinute }}
        endTimeHour: {{ endTimeHour }}
        endTimeMinute: {{ endTimeMinute }}
        daysOfTheWeek:
          - "{{ daysOfTheWeek }}"
        applyTimeOf: "{{ applyTimeOf }}"
    - name: softwareSetUpdateMode
      value: "{{ softwareSetUpdateMode }}"
      valid_values: ['USE_LATEST', 'USE_DESIRED']
    - name: desiredSoftwareSetId
      value: "{{ desiredSoftwareSetId }}"
    - name: kmsKeyArn
      value: "{{ kmsKeyArn }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: tags
      value: "{{ tags }}"
    - name: deviceCreationTags
      value: "{{ deviceCreationTags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_environment"
    values={[
        { label: 'update_environment', value: 'update_environment' }
    ]}
>
<TabItem value="update_environment">

Updates an environment.

```sql
UPDATE aws.workspaces_thin_client.environments
SET 
name = '{{ name }}',
desktopArn = '{{ desktopArn }}',
desktopEndpoint = '{{ desktopEndpoint }}',
softwareSetUpdateSchedule = '{{ softwareSetUpdateSchedule }}',
maintenanceWindow = '{{ maintenanceWindow }}',
softwareSetUpdateMode = '{{ softwareSetUpdateMode }}',
desiredSoftwareSetId = '{{ desiredSoftwareSetId }}',
deviceCreationTags = '{{ deviceCreationTags }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
RETURNING
environment;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_environment"
    values={[
        { label: 'delete_environment', value: 'delete_environment' }
    ]}
>
<TabItem value="delete_environment">

Deletes an environment.

```sql
DELETE FROM aws.workspaces_thin_client.environments
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
;
```
</TabItem>
</Tabs>
