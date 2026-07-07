--- 
title: trust_anchors
hide_title: false
hide_table_of_contents: false
keywords:
  - trust_anchors
  - rolesanywhere
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

Creates, updates, deletes, gets or lists a <code>trust_anchors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="trust_anchors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rolesanywhere.trust_anchors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_trust_anchor"
    values={[
        { label: 'get_trust_anchor', value: 'get_trust_anchor' },
        { label: 'list_trust_anchors', value: 'list_trust_anchors' }
    ]}
>
<TabItem value="get_trust_anchor">

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
    <td>The name of the trust anchor. (pattern: &lt;code&gt;&#91; a-zA-Z0-9-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The ISO-8601 timestamp when the trust anchor was created.</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the trust anchor is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="notificationSettings" /></td>
    <td><code>array</code></td>
    <td>A list of notification settings to be associated to the trust anchor.</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>object</code></td>
    <td>The trust anchor type and its related certificate data.</td>
</tr>
<tr>
    <td><CopyableCode code="trustAnchorArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the trust anchor.</td>
</tr>
<tr>
    <td><CopyableCode code="trustAnchorId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the trust anchor. (pattern: &lt;code&gt;.*&#91;a-f0-9&#93;&#123;8&#125;-(&#91;a-z0-9&#93;&#123;4&#125;-)&#123;3&#125;&#91;a-z0-9&#93;&#123;12&#125;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The ISO-8601 timestamp when the trust anchor was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_trust_anchors">

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
    <td>The name of the trust anchor. (pattern: &lt;code&gt;&#91; a-zA-Z0-9-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The ISO-8601 timestamp when the trust anchor was created.</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the trust anchor is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="notificationSettings" /></td>
    <td><code>array</code></td>
    <td>A list of notification settings to be associated to the trust anchor.</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>object</code></td>
    <td>The trust anchor type and its related certificate data.</td>
</tr>
<tr>
    <td><CopyableCode code="trustAnchorArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the trust anchor.</td>
</tr>
<tr>
    <td><CopyableCode code="trustAnchorId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the trust anchor. (pattern: &lt;code&gt;.*&#91;a-f0-9&#93;&#123;8&#125;-(&#91;a-z0-9&#93;&#123;4&#125;-)&#123;3&#125;&#91;a-z0-9&#93;&#123;12&#125;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The ISO-8601 timestamp when the trust anchor was last updated.</td>
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
    <td><a href="#get_trust_anchor"><CopyableCode code="get_trust_anchor" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-trust_anchor_id"><code>trust_anchor_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a trust anchor. Required permissions: rolesanywhere:GetTrustAnchor.</td>
</tr>
<tr>
    <td><a href="#list_trust_anchors"><CopyableCode code="list_trust_anchors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists the trust anchors in the authenticated account and Amazon Web Services Region. Required permissions: rolesanywhere:ListTrustAnchors.</td>
</tr>
<tr>
    <td><a href="#create_trust_anchor"><CopyableCode code="create_trust_anchor" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-source"><code>source</code></a></td>
    <td></td>
    <td>Creates a trust anchor to establish trust between IAM Roles Anywhere and your certificate authority (CA). You can define a trust anchor as a reference to an Private Certificate Authority (Private CA) or by uploading a CA certificate. Your Amazon Web Services workloads can authenticate with the trust anchor using certificates issued by the CA in exchange for temporary Amazon Web Services credentials. Required permissions: rolesanywhere:CreateTrustAnchor.</td>
</tr>
<tr>
    <td><a href="#update_trust_anchor"><CopyableCode code="update_trust_anchor" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-trust_anchor_id"><code>trust_anchor_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a trust anchor. You establish trust between IAM Roles Anywhere and your certificate authority (CA) by configuring a trust anchor. You can define a trust anchor as a reference to an Private Certificate Authority (Private CA) or by uploading a CA certificate. Your Amazon Web Services workloads can authenticate with the trust anchor using certificates issued by the CA in exchange for temporary Amazon Web Services credentials. Required permissions: rolesanywhere:UpdateTrustAnchor.</td>
</tr>
<tr>
    <td><a href="#put_notification_settings"><CopyableCode code="put_notification_settings" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-trustAnchorId"><code>trustAnchorId</code></a>, <a href="#parameter-notificationSettings"><code>notificationSettings</code></a></td>
    <td></td>
    <td>Attaches a list of notification settings to a trust anchor. A notification setting includes information such as event name, threshold, status of the notification setting, and the channel to notify. Required permissions: rolesanywhere:PutNotificationSettings.</td>
</tr>
<tr>
    <td><a href="#delete_trust_anchor"><CopyableCode code="delete_trust_anchor" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-trust_anchor_id"><code>trust_anchor_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a trust anchor. Required permissions: rolesanywhere:DeleteTrustAnchor.</td>
</tr>
<tr>
    <td><a href="#disable_trust_anchor"><CopyableCode code="disable_trust_anchor" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-trust_anchor_id"><code>trust_anchor_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disables a trust anchor. When disabled, temporary credential requests specifying this trust anchor are unauthorized. Required permissions: rolesanywhere:DisableTrustAnchor.</td>
</tr>
<tr>
    <td><a href="#enable_trust_anchor"><CopyableCode code="enable_trust_anchor" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-trust_anchor_id"><code>trust_anchor_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Enables a trust anchor. When enabled, certificates in the trust anchor chain are authorized for trust validation. Required permissions: rolesanywhere:EnableTrustAnchor.</td>
</tr>
<tr>
    <td><a href="#reset_notification_settings"><CopyableCode code="reset_notification_settings" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-trustAnchorId"><code>trustAnchorId</code></a>, <a href="#parameter-notificationSettingKeys"><code>notificationSettingKeys</code></a></td>
    <td></td>
    <td>Resets the custom notification setting to IAM Roles Anywhere default setting. Required permissions: rolesanywhere:ResetNotificationSettings.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-trust_anchor_id">
    <td><CopyableCode code="trust_anchor_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the trust anchor.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token that indicates where the output should continue from, if a previous request did not show all results. To get the next results, make the request again with this value.</td>
</tr>
<tr id="parameter-pageSize">
    <td><CopyableCode code="pageSize" /></td>
    <td><code>integer</code></td>
    <td>The number of resources in the paginated list.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_trust_anchor"
    values={[
        { label: 'get_trust_anchor', value: 'get_trust_anchor' },
        { label: 'list_trust_anchors', value: 'list_trust_anchors' }
    ]}
>
<TabItem value="get_trust_anchor">

Gets a trust anchor. Required permissions: rolesanywhere:GetTrustAnchor.

```sql
SELECT
name,
createdAt,
enabled,
notificationSettings,
source,
trustAnchorArn,
trustAnchorId,
updatedAt
FROM aws.rolesanywhere.trust_anchors
WHERE trust_anchor_id = '{{ trust_anchor_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_trust_anchors">

Lists the trust anchors in the authenticated account and Amazon Web Services Region. Required permissions: rolesanywhere:ListTrustAnchors.

```sql
SELECT
name,
createdAt,
enabled,
notificationSettings,
source,
trustAnchorArn,
trustAnchorId,
updatedAt
FROM aws.rolesanywhere.trust_anchors
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND pageSize = '{{ pageSize }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_trust_anchor"
    values={[
        { label: 'create_trust_anchor', value: 'create_trust_anchor' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_trust_anchor">

Creates a trust anchor to establish trust between IAM Roles Anywhere and your certificate authority (CA). You can define a trust anchor as a reference to an Private Certificate Authority (Private CA) or by uploading a CA certificate. Your Amazon Web Services workloads can authenticate with the trust anchor using certificates issued by the CA in exchange for temporary Amazon Web Services credentials. Required permissions: rolesanywhere:CreateTrustAnchor.

```sql
INSERT INTO aws.rolesanywhere.trust_anchors (
name,
source,
enabled,
tags,
notificationSettings,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ source }}' /* required */,
{{ enabled }},
'{{ tags }}',
'{{ notificationSettings }}',
'{{ region }}'
RETURNING
trustAnchor
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: trust_anchors
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the trust_anchors resource.
    - name: name
      value: "{{ name }}"
    - name: source
      description: |
        The trust anchor type and its related certificate data.
      value:
        sourceType: "{{ sourceType }}"
        sourceData:
          x509CertificateData: "{{ x509CertificateData }}"
          acmPcaArn: "{{ acmPcaArn }}"
    - name: enabled
      value: {{ enabled }}
    - name: tags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: notificationSettings
      value:
        - enabled: {{ enabled }}
          event: "{{ event }}"
          threshold: {{ threshold }}
          channel: "{{ channel }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_trust_anchor"
    values={[
        { label: 'update_trust_anchor', value: 'update_trust_anchor' }
    ]}
>
<TabItem value="update_trust_anchor">

Updates a trust anchor. You establish trust between IAM Roles Anywhere and your certificate authority (CA) by configuring a trust anchor. You can define a trust anchor as a reference to an Private Certificate Authority (Private CA) or by uploading a CA certificate. Your Amazon Web Services workloads can authenticate with the trust anchor using certificates issued by the CA in exchange for temporary Amazon Web Services credentials. Required permissions: rolesanywhere:UpdateTrustAnchor.

```sql
UPDATE aws.rolesanywhere.trust_anchors
SET 
name = '{{ name }}',
source = '{{ source }}'
WHERE 
trust_anchor_id = '{{ trust_anchor_id }}' --required
AND region = '{{ region }}' --required
RETURNING
trustAnchor;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_notification_settings"
    values={[
        { label: 'put_notification_settings', value: 'put_notification_settings' }
    ]}
>
<TabItem value="put_notification_settings">

Attaches a list of notification settings to a trust anchor. A notification setting includes information such as event name, threshold, status of the notification setting, and the channel to notify. Required permissions: rolesanywhere:PutNotificationSettings.

```sql
REPLACE aws.rolesanywhere.trust_anchors
SET 
trustAnchorId = '{{ trustAnchorId }}',
notificationSettings = '{{ notificationSettings }}'
WHERE 
region = '{{ region }}' --required
AND trustAnchorId = '{{ trustAnchorId }}' --required
AND notificationSettings = '{{ notificationSettings }}' --required
RETURNING
trustAnchor;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_trust_anchor"
    values={[
        { label: 'delete_trust_anchor', value: 'delete_trust_anchor' }
    ]}
>
<TabItem value="delete_trust_anchor">

Deletes a trust anchor. Required permissions: rolesanywhere:DeleteTrustAnchor.

```sql
DELETE FROM aws.rolesanywhere.trust_anchors
WHERE trust_anchor_id = '{{ trust_anchor_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disable_trust_anchor"
    values={[
        { label: 'disable_trust_anchor', value: 'disable_trust_anchor' },
        { label: 'enable_trust_anchor', value: 'enable_trust_anchor' },
        { label: 'reset_notification_settings', value: 'reset_notification_settings' }
    ]}
>
<TabItem value="disable_trust_anchor">

Disables a trust anchor. When disabled, temporary credential requests specifying this trust anchor are unauthorized. Required permissions: rolesanywhere:DisableTrustAnchor.

```sql
EXEC aws.rolesanywhere.trust_anchors.disable_trust_anchor 
@trust_anchor_id='{{ trust_anchor_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="enable_trust_anchor">

Enables a trust anchor. When enabled, certificates in the trust anchor chain are authorized for trust validation. Required permissions: rolesanywhere:EnableTrustAnchor.

```sql
EXEC aws.rolesanywhere.trust_anchors.enable_trust_anchor 
@trust_anchor_id='{{ trust_anchor_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="reset_notification_settings">

Resets the custom notification setting to IAM Roles Anywhere default setting. Required permissions: rolesanywhere:ResetNotificationSettings.

```sql
EXEC aws.rolesanywhere.trust_anchors.reset_notification_settings 
@region='{{ region }}' --required 
@@json=
'{
"trustAnchorId": "{{ trustAnchorId }}", 
"notificationSettingKeys": "{{ notificationSettingKeys }}"
}'
;
```
</TabItem>
</Tabs>
