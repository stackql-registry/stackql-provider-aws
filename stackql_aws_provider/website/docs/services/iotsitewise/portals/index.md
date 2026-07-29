--- 
title: portals
hide_title: false
hide_table_of_contents: false
keywords:
  - portals
  - iotsitewise
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

Creates, updates, deletes, gets or lists a <code>portals</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="portals" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotsitewise.portals" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_portal"
    values={[
        { label: 'describe_portal', value: 'describe_portal' },
        { label: 'list_portals', value: 'list_portals' }
    ]}
>
<TabItem value="describe_portal">

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
    <td><CopyableCode code="alarms" /></td>
    <td><code>object</code></td>
    <td>Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal. You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range. For more information, see Monitoring with alarms in the IoT SiteWise Application Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="notification_sender_email" /></td>
    <td><code>string</code></td>
    <td>The email address that sends alarm notifications. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-\.\+&#93;+@&#91;a-zA-Z0-9_\-\.\+&#93;+\.&#91;a-zA-Z&#93;&#123;2,&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="portal_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the portal, which has the following format. arn:$&#123;Partition&#125;:iotsitewise:$&#123;Region&#125;:$&#123;Account&#125;:portal/$&#123;PortalId&#125; (pattern: &lt;code&gt;^arn:aws(-cn|-us-gov)?:&#91;a-zA-Z0-9-:\/_\.&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="portal_auth_mode" /></td>
    <td><code>string</code></td>
    <td>The service to use to authenticate users to the portal. (IAM, SSO)</td>
</tr>
<tr>
    <td><CopyableCode code="portal_client_id" /></td>
    <td><code>string</code></td>
    <td>The IAM Identity Center application generated client ID (used with IAM Identity Center API operations). IoT SiteWise includes portalClientId for only portals that use IAM Identity Center to authenticate users. (pattern: &lt;code&gt;^&#91;!-~&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="portal_contact_email" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services administrator's contact email address. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-\.\+&#93;+@&#91;a-zA-Z0-9_\-\.\+&#93;+\.&#91;a-zA-Z&#93;&#123;2,&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="portal_creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the portal was created, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="portal_description" /></td>
    <td><code>string</code></td>
    <td>The portal's description. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="portal_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the portal. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="portal_last_update_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the portal was last updated, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="portal_logo_image_location" /></td>
    <td><code>object</code></td>
    <td>The portal's logo image, which is available at a URL.</td>
</tr>
<tr>
    <td><CopyableCode code="portal_name" /></td>
    <td><code>string</code></td>
    <td>The name of the portal. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="portal_start_url" /></td>
    <td><code>string</code></td>
    <td>The URL for the IoT SiteWise Monitor portal. You can use this URL to access portals that use IAM Identity Center for authentication. For portals that use IAM for authentication, you must use the IoT SiteWise console to get a URL that you can use to access the portal. (pattern: &lt;code&gt;^(http|https)\:​//\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="portal_status" /></td>
    <td><code>object</code></td>
    <td>Contains information about the current status of a portal.</td>
</tr>
<tr>
    <td><CopyableCode code="portal_type" /></td>
    <td><code>string</code></td>
    <td>Define the type of portal. The value for IoT SiteWise Monitor (Classic) is SITEWISE_PORTAL_V1. The value for IoT SiteWise Monitor (AI-aware) is SITEWISE_PORTAL_V2. (SITEWISE_PORTAL_V1, SITEWISE_PORTAL_V2)</td>
</tr>
<tr>
    <td><CopyableCode code="portal_type_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration entry associated with the specific portal type. The value for IoT SiteWise Monitor (Classic) is SITEWISE_PORTAL_V1. The value for IoT SiteWise Monitor (AI-aware) is SITEWISE_PORTAL_V2.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the service role that allows the portal's users to access your IoT SiteWise resources on your behalf. For more information, see Using service roles for IoT SiteWise Monitor in the IoT SiteWise User Guide. (pattern: &lt;code&gt;^arn:aws(-cn|-us-gov)?:&#91;a-zA-Z0-9-:\/_\.\+=,@&#93;+$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_portals">

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
    <td>The ID of the portal. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the portal. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the portal was created, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The portal's description. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the portal was last updated, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="portal_type" /></td>
    <td><code>string</code></td>
    <td>Define the type of portal. The value for IoT SiteWise Monitor (Classic) is SITEWISE_PORTAL_V1. The value for IoT SiteWise Monitor (AI-aware) is SITEWISE_PORTAL_V2. (SITEWISE_PORTAL_V1, SITEWISE_PORTAL_V2)</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the service role that allows the portal's users to access your IoT SiteWise resources on your behalf. For more information, see Using service roles for IoT SiteWise Monitor in the IoT SiteWise User Guide. (pattern: &lt;code&gt;^arn:aws(-cn|-us-gov)?:&#91;a-zA-Z0-9-:\/_\.\+=,@&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="start_url" /></td>
    <td><code>string</code></td>
    <td>The URL for the IoT SiteWise Monitor portal. You can use this URL to access portals that use IAM Identity Center for authentication. For portals that use IAM for authentication, you must use the IoT SiteWise console to get a URL that you can use to access the portal. (pattern: &lt;code&gt;^(http|https)\:​//\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>Contains information about the current status of a portal.</td>
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
    <td><a href="#describe_portal"><CopyableCode code="describe_portal" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-portal_id"><code>portal_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a portal.</td>
</tr>
<tr>
    <td><a href="#list_portals"><CopyableCode code="list_portals" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Retrieves a paginated list of IoT SiteWise Monitor portals.</td>
</tr>
<tr>
    <td><a href="#create_portal"><CopyableCode code="create_portal" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-portalName"><code>portalName</code></a>, <a href="#parameter-portalContactEmail"><code>portalContactEmail</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a></td>
    <td></td>
    <td>Creates a portal, which can contain projects and dashboards. IoT SiteWise Monitor uses IAM Identity Center or IAM to authenticate portal users and manage user permissions. Before you can sign in to a new portal, you must add at least one identity to that portal. For more information, see Adding or removing portal administrators in the IoT SiteWise User Guide.</td>
</tr>
<tr>
    <td><a href="#update_portal"><CopyableCode code="update_portal" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-portal_id"><code>portal_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-portalName"><code>portalName</code></a>, <a href="#parameter-portalContactEmail"><code>portalContactEmail</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a></td>
    <td></td>
    <td>Updates an IoT SiteWise Monitor portal.</td>
</tr>
<tr>
    <td><a href="#delete_portal"><CopyableCode code="delete_portal" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-portal_id"><code>portal_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Deletes a portal from IoT SiteWise Monitor.</td>
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
<tr id="parameter-portal_id">
    <td><CopyableCode code="portal_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the portal to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return for each paginated request. Default: 50</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to be used for the next set of paginated results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_portal"
    values={[
        { label: 'describe_portal', value: 'describe_portal' },
        { label: 'list_portals', value: 'list_portals' }
    ]}
>
<TabItem value="describe_portal">

Retrieves information about a portal.

```sql
SELECT
alarms,
notification_sender_email,
portal_arn,
portal_auth_mode,
portal_client_id,
portal_contact_email,
portal_creation_date,
portal_description,
portal_id,
portal_last_update_date,
portal_logo_image_location,
portal_name,
portal_start_url,
portal_status,
portal_type,
portal_type_configuration,
role_arn
FROM aws.iotsitewise.portals
WHERE portal_id = '{{ portal_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_portals">

Retrieves a paginated list of IoT SiteWise Monitor portals.

```sql
SELECT
id,
name,
creation_date,
description,
last_update_date,
portal_type,
role_arn,
start_url,
status
FROM aws.iotsitewise.portals
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_portal"
    values={[
        { label: 'create_portal', value: 'create_portal' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_portal">

Creates a portal, which can contain projects and dashboards. IoT SiteWise Monitor uses IAM Identity Center or IAM to authenticate portal users and manage user permissions. Before you can sign in to a new portal, you must add at least one identity to that portal. For more information, see Adding or removing portal administrators in the IoT SiteWise User Guide.

```sql
INSERT INTO aws.iotsitewise.portals (
portalName,
portalDescription,
portalContactEmail,
clientToken,
portalLogoImageFile,
roleArn,
tags,
portalAuthMode,
notificationSenderEmail,
alarms,
portalType,
portalTypeConfiguration,
region
)
SELECT 
'{{ portalName }}' /* required */,
'{{ portalDescription }}',
'{{ portalContactEmail }}' /* required */,
'{{ clientToken }}',
'{{ portalLogoImageFile }}',
'{{ roleArn }}' /* required */,
'{{ tags }}',
'{{ portalAuthMode }}',
'{{ notificationSenderEmail }}',
'{{ alarms }}',
'{{ portalType }}',
'{{ portalTypeConfiguration }}',
'{{ region }}'
RETURNING
portal_arn,
portal_id,
portal_start_url,
portal_status,
sso_application_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: portals
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the portals resource.
    - name: portalName
      value: "{{ portalName }}"
    - name: portalDescription
      value: "{{ portalDescription }}"
    - name: portalContactEmail
      value: "{{ portalContactEmail }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: portalLogoImageFile
      description: |
        Contains an image file.
      value:
        data: "{{ data }}"
        type_: "{{ type_ }}"
    - name: roleArn
      value: "{{ roleArn }}"
    - name: tags
      value: "{{ tags }}"
    - name: portalAuthMode
      value: "{{ portalAuthMode }}"
      valid_values: ['IAM', 'SSO']
    - name: notificationSenderEmail
      value: "{{ notificationSenderEmail }}"
    - name: alarms
      description: |
        Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal. You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range. For more information, see Monitoring with alarms in the IoT SiteWise Application Guide.
      value:
        alarmRoleArn: "{{ alarmRoleArn }}"
        notificationLambdaArn: "{{ notificationLambdaArn }}"
    - name: portalType
      value: "{{ portalType }}"
      valid_values: ['SITEWISE_PORTAL_V1', 'SITEWISE_PORTAL_V2']
    - name: portalTypeConfiguration
      value: "{{ portalTypeConfiguration }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_portal"
    values={[
        { label: 'update_portal', value: 'update_portal' }
    ]}
>
<TabItem value="update_portal">

Updates an IoT SiteWise Monitor portal.

```sql
UPDATE aws.iotsitewise.portals
SET 
portalName = '{{ portalName }}',
portalDescription = '{{ portalDescription }}',
portalContactEmail = '{{ portalContactEmail }}',
portalLogoImage = '{{ portalLogoImage }}',
roleArn = '{{ roleArn }}',
clientToken = '{{ clientToken }}',
notificationSenderEmail = '{{ notificationSenderEmail }}',
alarms = '{{ alarms }}',
portalType = '{{ portalType }}',
portalTypeConfiguration = '{{ portalTypeConfiguration }}'
WHERE 
portal_id = '{{ portal_id }}' --required
AND region = '{{ region }}' --required
AND portalName = '{{ portalName }}' --required
AND portalContactEmail = '{{ portalContactEmail }}' --required
AND roleArn = '{{ roleArn }}' --required
RETURNING
portal_status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_portal"
    values={[
        { label: 'delete_portal', value: 'delete_portal' }
    ]}
>
<TabItem value="delete_portal">

Deletes a portal from IoT SiteWise Monitor.

```sql
DELETE FROM aws.iotsitewise.portals
WHERE portal_id = '{{ portal_id }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
;
```
</TabItem>
</Tabs>
