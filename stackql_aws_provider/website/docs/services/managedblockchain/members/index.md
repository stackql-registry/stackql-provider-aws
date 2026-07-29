--- 
title: members
hide_title: false
hide_table_of_contents: false
keywords:
  - members
  - managedblockchain
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

Creates, updates, deletes, gets or lists a <code>members</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="members" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.managedblockchain.members" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_member"
    values={[
        { label: 'get_member', value: 'get_member' },
        { label: 'list_members', value: 'list_members' }
    ]}
>
<TabItem value="get_member">

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
    <td>The Amazon Resource Name (ARN) of the member. For more information about ARNs and their format, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference. (pattern: &lt;code&gt;^arn:.+:.+:.+:.+:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the member was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description for the member.</td>
</tr>
<tr>
    <td><CopyableCode code="framework_attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes relevant to a member for the blockchain framework that the Managed Blockchain network uses.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the member.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the customer managed key in Key Management Service (KMS) that the member uses for encryption at rest. If the value of this parameter is "AWS Owned KMS Key", the member uses an Amazon Web Services owned KMS key for encryption. This parameter is inherited by the nodes that this member owns. For more information, see Encryption at Rest in the Amazon Managed Blockchain Hyperledger Fabric Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="log_publishing_configuration" /></td>
    <td><code>object</code></td>
    <td>Configuration properties for logging events associated with a member.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the member. (pattern: &lt;code&gt;^(?!-|&#91;0-9&#93;)(?!.*-$)(?!.*?--)&#91;a-zA-Z0-9-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="network_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the network to which the member belongs.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of a member. CREATING - The Amazon Web Services account is in the process of creating a member. AVAILABLE - The member has been created and can participate in the network. CREATE_FAILED - The Amazon Web Services account attempted to create a member and creation failed. UPDATING - The member is in the process of being updated. DELETING - The member and all associated resources are in the process of being deleted. Either the Amazon Web Services account that owns the member deleted it, or the member is being deleted as the result of an APPROVED PROPOSAL to remove the member. DELETED - The member can no longer participate on the network and all associated resources are deleted. Either the Amazon Web Services account that owns the member deleted it, or the member is being deleted as the result of an APPROVED PROPOSAL to remove the member. INACCESSIBLE_ENCRYPTION_KEY - The member is impaired and might not function as expected because it cannot access the specified customer managed key in KMS for encryption at rest. Either the KMS key was disabled or deleted, or the grants on the key were revoked. The effect of disabling or deleting a key or of revoking a grant isn't immediate. It might take some time for the member resource to discover that the key is inaccessible. When a resource is in this state, we recommend deleting and recreating the resource. (CREATING, AVAILABLE, CREATE_FAILED, UPDATING, DELETING, DELETED, INACCESSIBLE_ENCRYPTION_KEY)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags assigned to the member. Tags consist of a key and optional value. For more information about tags, see Tagging Resources in the Amazon Managed Blockchain Ethereum Developer Guide, or Tagging Resources in the Amazon Managed Blockchain Hyperledger Fabric Developer Guide.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_members">

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
    <td><CopyableCode code="members" /></td>
    <td><code>array</code></td>
    <td>An array of MemberSummary objects. Each object contains details about a network member.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The pagination token that indicates the next set of results to retrieve.</td>
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
    <td><a href="#get_member"><CopyableCode code="get_member" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-member_id"><code>member_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns detailed information about a member. Applies only to Hyperledger Fabric.</td>
</tr>
<tr>
    <td><a href="#list_members"><CopyableCode code="list_members" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-isOwned"><code>isOwned</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of the members in a network and properties of their configurations. Applies only to Hyperledger Fabric.</td>
</tr>
<tr>
    <td><a href="#create_member"><CopyableCode code="create_member" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClientRequestToken"><code>ClientRequestToken</code></a>, <a href="#parameter-InvitationId"><code>InvitationId</code></a>, <a href="#parameter-MemberConfiguration"><code>MemberConfiguration</code></a></td>
    <td></td>
    <td>Creates a member within a Managed Blockchain network. Applies only to Hyperledger Fabric.</td>
</tr>
<tr>
    <td><a href="#update_member"><CopyableCode code="update_member" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-member_id"><code>member_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a member configuration with new parameters. Applies only to Hyperledger Fabric.</td>
</tr>
<tr>
    <td><a href="#delete_member"><CopyableCode code="delete_member" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-member_id"><code>member_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a member. Deleting a member removes the member and all associated resources from the network. DeleteMember can only be called for a specified MemberId if the principal performing the action is associated with the Amazon Web Services account that owns the member. In all other cases, the DeleteMember action is carried out as the result of an approved proposal to remove a member. If MemberId is the last member in a network specified by the last Amazon Web Services account, the network is deleted also. Applies only to Hyperledger Fabric.</td>
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
<tr id="parameter-member_id">
    <td><CopyableCode code="member_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the member to remove.</td>
</tr>
<tr id="parameter-network_id">
    <td><CopyableCode code="network_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the network from which the member is removed.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-isOwned">
    <td><CopyableCode code="isOwned" /></td>
    <td><code>boolean</code></td>
    <td>An optional Boolean value. If provided, the request is limited either to members that the current Amazon Web Services account owns (true) or that other Amazon Web Services accountsn own (false). If omitted, all members are listed.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of members to return in the request.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The optional name of the member to list.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token that indicates the next set of results to retrieve.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>An optional status specifier. If provided, only members currently in this status are listed.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_member"
    values={[
        { label: 'get_member', value: 'get_member' },
        { label: 'list_members', value: 'list_members' }
    ]}
>
<TabItem value="get_member">

Returns detailed information about a member. Applies only to Hyperledger Fabric.

```sql
SELECT
arn,
creation_date,
description,
framework_attributes,
id,
kms_key_arn,
log_publishing_configuration,
name,
network_id,
status,
tags
FROM aws.managedblockchain.members
WHERE network_id = '{{ network_id }}' -- required
AND member_id = '{{ member_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_members">

Returns a list of the members in a network and properties of their configurations. Applies only to Hyperledger Fabric.

```sql
SELECT
members,
next_token
FROM aws.managedblockchain.members
WHERE network_id = '{{ network_id }}' -- required
AND region = '{{ region }}' -- required
AND name = '{{ name }}'
AND status = '{{ status }}'
AND isOwned = '{{ isOwned }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_member"
    values={[
        { label: 'create_member', value: 'create_member' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_member">

Creates a member within a Managed Blockchain network. Applies only to Hyperledger Fabric.

```sql
INSERT INTO aws.managedblockchain.members (
ClientRequestToken,
InvitationId,
MemberConfiguration,
network_id,
region
)
SELECT 
'{{ ClientRequestToken }}' /* required */,
'{{ InvitationId }}' /* required */,
'{{ MemberConfiguration }}' /* required */,
'{{ network_id }}',
'{{ region }}'
RETURNING
member_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: members
  props:
    - name: network_id
      value: "{{ network_id }}"
      description: Required parameter for the members resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the members resource.
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
    - name: InvitationId
      value: "{{ InvitationId }}"
    - name: MemberConfiguration
      description: |
        Configuration properties of the member. Applies only to Hyperledger Fabric.
      value:
        Name: "{{ Name }}"
        Description: "{{ Description }}"
        FrameworkConfiguration:
          Fabric:
            AdminUsername: "{{ AdminUsername }}"
            AdminPassword: "{{ AdminPassword }}"
        LogPublishingConfiguration:
          Fabric:
            CaLogs:
              Cloudwatch:
                Enabled: {{ Enabled }}
        Tags: "{{ Tags }}"
        KmsKeyArn: "{{ KmsKeyArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_member"
    values={[
        { label: 'update_member', value: 'update_member' }
    ]}
>
<TabItem value="update_member">

Updates a member configuration with new parameters. Applies only to Hyperledger Fabric.

```sql
UPDATE aws.managedblockchain.members
SET 
LogPublishingConfiguration = '{{ LogPublishingConfiguration }}'
WHERE 
network_id = '{{ network_id }}' --required
AND member_id = '{{ member_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_member"
    values={[
        { label: 'delete_member', value: 'delete_member' }
    ]}
>
<TabItem value="delete_member">

Deletes a member. Deleting a member removes the member and all associated resources from the network. DeleteMember can only be called for a specified MemberId if the principal performing the action is associated with the Amazon Web Services account that owns the member. In all other cases, the DeleteMember action is carried out as the result of an approved proposal to remove a member. If MemberId is the last member in a network specified by the last Amazon Web Services account, the network is deleted also. Applies only to Hyperledger Fabric.

```sql
DELETE FROM aws.managedblockchain.members
WHERE network_id = '{{ network_id }}' --required
AND member_id = '{{ member_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
