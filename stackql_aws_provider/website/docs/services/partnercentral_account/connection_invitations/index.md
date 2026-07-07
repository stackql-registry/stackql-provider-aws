--- 
title: connection_invitations
hide_title: false
hide_table_of_contents: false
keywords:
  - connection_invitations
  - partnercentral_account
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

Creates, updates, deletes, gets or lists a <code>connection_invitations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connection_invitations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.partnercentral_account.connection_invitations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_connection_invitation"
    values={[
        { label: 'get_connection_invitation', value: 'get_connection_invitation' },
        { label: 'list_connection_invitations', value: 'list_connection_invitations' }
    ]}
>
<TabItem value="get_connection_invitation">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the connection invitation. (pattern: &lt;code&gt;arn:&#91;a-zA-Z0-9-&#93;+:partnercentral:&#91;a-z0-9\-&#93;*::catalog/&#91;a-zA-Z&#93;+/connection-invitation/pacinv-&#91;A-Za-z0-9&#93;&#123;13&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Catalog" /></td>
    <td><code>string</code></td>
    <td>The catalog identifier where the connection invitation exists. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ConnectionId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the connection associated with this invitation. (pattern: &lt;code&gt;pac-&#91;A-Za-z0-9&#93;&#123;13&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ConnectionType" /></td>
    <td><code>string</code></td>
    <td>The type of connection being requested in the invitation. (OPPORTUNITY_COLLABORATION, SUBSIDIARY)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the connection invitation was created.</td>
</tr>
<tr>
    <td><CopyableCode code="ExpiresAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the connection invitation will expire.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the connection invitation. (pattern: &lt;code&gt;pacinv-&#91;A-Za-z0-9&#93;&#123;13&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="InvitationMessage" /></td>
    <td><code>string</code></td>
    <td>The custom message included with the connection invitation. (pattern: &lt;code&gt;&#91;\u0020-\u007E\u00A0-\uD7FF\uE000-\uFFFD\n&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="InviterEmail" /></td>
    <td><code>string</code></td>
    <td>The email address of the person who sent the connection invitation. (pattern: &lt;code&gt;&#91;a-zA-Z0-9.!#$%&'*+/=?^_`&#123;|&#125;~-&#93;+@&#91;a-zA-Z0-9&#93;(?:&#91;a-zA-Z0-9-&#93;&#123;0,61&#125;&#91;a-zA-Z0-9&#93;)?(?:\.&#91;a-zA-Z0-9&#93;(?:&#91;a-zA-Z0-9-&#93;&#123;0,61&#125;&#91;a-zA-Z0-9&#93;)?)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="InviterName" /></td>
    <td><code>string</code></td>
    <td>The name of the person who sent the connection invitation. (pattern: &lt;code&gt;&#91;\u0020-\u007E\u00A0-\uD7FF\uE000-\uFFFD&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OtherParticipantIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the other participant in the connection invitation. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ParticipantType" /></td>
    <td><code>string</code></td>
    <td>The type of participant (inviter or invitee) in the connection invitation. (SENDER, RECEIVER)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of the connection invitation. (PENDING, ACCEPTED, REJECTED, CANCELED, EXPIRED)</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the connection invitation was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_connection_invitations">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the connection invitation. (pattern: &lt;code&gt;arn:&#91;a-zA-Z0-9-&#93;+:partnercentral:&#91;a-z0-9\-&#93;*::catalog/&#91;a-zA-Z&#93;+/connection-invitation/pacinv-&#91;A-Za-z0-9&#93;&#123;13&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Catalog" /></td>
    <td><code>string</code></td>
    <td>The catalog identifier where the connection invitation exists. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ConnectionId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the connection associated with this invitation. (pattern: &lt;code&gt;pac-&#91;A-Za-z0-9&#93;&#123;13&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ConnectionType" /></td>
    <td><code>string</code></td>
    <td>The type of connection being requested in the invitation. (OPPORTUNITY_COLLABORATION, SUBSIDIARY)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the connection invitation was created.</td>
</tr>
<tr>
    <td><CopyableCode code="ExpiresAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the connection invitation will expire.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the connection invitation. (pattern: &lt;code&gt;pacinv-&#91;A-Za-z0-9&#93;&#123;13&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OtherParticipantIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the other participant in the connection invitation. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ParticipantType" /></td>
    <td><code>string</code></td>
    <td>The type of participant (inviter or invitee) in the connection invitation. (SENDER, RECEIVER)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of the connection invitation. (PENDING, ACCEPTED, REJECTED, CANCELED, EXPIRED)</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the connection invitation was last updated.</td>
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
    <td><a href="#get_connection_invitation"><CopyableCode code="get_connection_invitation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information about a specific connection invitation.</td>
</tr>
<tr>
    <td><a href="#list_connection_invitations"><CopyableCode code="list_connection_invitations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists connection invitations for the partner account, with optional filtering by status, type, and other criteria.</td>
</tr>
<tr>
    <td><a href="#create_connection_invitation"><CopyableCode code="create_connection_invitation" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-ConnectionType"><code>ConnectionType</code></a>, <a href="#parameter-Email"><code>Email</code></a>, <a href="#parameter-Message"><code>Message</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-ReceiverIdentifier"><code>ReceiverIdentifier</code></a></td>
    <td></td>
    <td>Creates a new connection invitation to establish a partnership with another organization.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_connection_invitation"
    values={[
        { label: 'get_connection_invitation', value: 'get_connection_invitation' },
        { label: 'list_connection_invitations', value: 'list_connection_invitations' }
    ]}
>
<TabItem value="get_connection_invitation">

Retrieves detailed information about a specific connection invitation.

```sql
SELECT
Arn,
Catalog,
ConnectionId,
ConnectionType,
CreatedAt,
ExpiresAt,
Id,
InvitationMessage,
InviterEmail,
InviterName,
OtherParticipantIdentifier,
ParticipantType,
Status,
UpdatedAt
FROM aws.partnercentral_account.connection_invitations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_connection_invitations">

Lists connection invitations for the partner account, with optional filtering by status, type, and other criteria.

```sql
SELECT
Arn,
Catalog,
ConnectionId,
ConnectionType,
CreatedAt,
ExpiresAt,
Id,
OtherParticipantIdentifier,
ParticipantType,
Status,
UpdatedAt
FROM aws.partnercentral_account.connection_invitations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_connection_invitation"
    values={[
        { label: 'create_connection_invitation', value: 'create_connection_invitation' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_connection_invitation">

Creates a new connection invitation to establish a partnership with another organization.

```sql
INSERT INTO aws.partnercentral_account.connection_invitations (
Catalog,
ClientToken,
ConnectionType,
Email,
Message,
Name,
ReceiverIdentifier,
region
)
SELECT 
'{{ Catalog }}',
'{{ ClientToken }}' /* required */,
'{{ ConnectionType }}' /* required */,
'{{ Email }}' /* required */,
'{{ Message }}' /* required */,
'{{ Name }}' /* required */,
'{{ ReceiverIdentifier }}' /* required */,
'{{ region }}'
RETURNING
Arn,
Catalog,
ConnectionId,
ConnectionType,
CreatedAt,
ExpiresAt,
Id,
InvitationMessage,
InviterEmail,
InviterName,
OtherParticipantIdentifier,
ParticipantType,
Status,
UpdatedAt
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: connection_invitations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the connection_invitations resource.
    - name: Catalog
      value: "{{ Catalog }}"
      description: |
        The catalog identifier where the connection invitation will be created.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
    - name: ConnectionType
      value: "{{ ConnectionType }}"
      description: |
        The type of connection being requested (e.g., reseller, distributor, technology partner).
      valid_values: ['OPPORTUNITY_COLLABORATION', 'SUBSIDIARY']
    - name: Email
      value: "{{ Email }}"
      description: |
        The email address of the person to send the connection invitation to.
    - name: Message
      value: "{{ Message }}"
      description: |
        A custom message to include with the connection invitation.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the person sending the connection invitation.
    - name: ReceiverIdentifier
      value: "{{ ReceiverIdentifier }}"
      description: |
        The identifier of the organization or partner to invite for connection.
`}</CodeBlock>

</TabItem>
</Tabs>
