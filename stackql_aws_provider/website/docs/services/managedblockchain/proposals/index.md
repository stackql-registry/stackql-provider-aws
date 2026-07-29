--- 
title: proposals
hide_title: false
hide_table_of_contents: false
keywords:
  - proposals
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

Creates, updates, deletes, gets or lists a <code>proposals</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="proposals" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.managedblockchain.proposals" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_proposal"
    values={[
        { label: 'get_proposal', value: 'get_proposal' },
        { label: 'list_proposals', value: 'list_proposals' }
    ]}
>
<TabItem value="get_proposal">

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
    <td><CopyableCode code="actions" /></td>
    <td><code>object</code></td>
    <td>The actions to carry out if a proposal is APPROVED. Applies only to Hyperledger Fabric.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the proposal. For more information about ARNs and their format, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference. (pattern: &lt;code&gt;^arn:.+:.+:.+:.+:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the proposal was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the proposal.</td>
</tr>
<tr>
    <td><CopyableCode code="expiration_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the proposal expires. This is the CreationDate plus the ProposalDurationInHours that is specified in the ProposalThresholdPolicy. After this date and time, if members haven't cast enough votes to determine the outcome according to the voting policy, the proposal is EXPIRED and Actions aren't carried out.</td>
</tr>
<tr>
    <td><CopyableCode code="network_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the network for which the proposal is made.</td>
</tr>
<tr>
    <td><CopyableCode code="no_vote_count" /></td>
    <td><code>integer</code></td>
    <td>The current total of NO votes cast on the proposal by members.</td>
</tr>
<tr>
    <td><CopyableCode code="outstanding_vote_count" /></td>
    <td><code>integer</code></td>
    <td>The number of votes remaining to be cast on the proposal by members. In other words, the number of members minus the sum of YES votes and NO votes.</td>
</tr>
<tr>
    <td><CopyableCode code="proposal_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the proposal.</td>
</tr>
<tr>
    <td><CopyableCode code="proposed_by_member_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the member that created the proposal.</td>
</tr>
<tr>
    <td><CopyableCode code="proposed_by_member_name" /></td>
    <td><code>string</code></td>
    <td>The name of the member that created the proposal. (pattern: &lt;code&gt;^(?!-|&#91;0-9&#93;)(?!.*-$)(?!.*?--)&#91;a-zA-Z0-9-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the proposal. Values are as follows: IN_PROGRESS - The proposal is active and open for member voting. APPROVED - The proposal was approved with sufficient YES votes among members according to the VotingPolicy specified for the Network. The specified proposal actions are carried out. REJECTED - The proposal was rejected with insufficient YES votes among members according to the VotingPolicy specified for the Network. The specified ProposalActions aren't carried out. EXPIRED - Members didn't cast the number of votes required to determine the proposal outcome before the proposal expired. The specified ProposalActions aren't carried out. ACTION_FAILED - One or more of the specified ProposalActions in a proposal that was approved couldn't be completed because of an error. The ACTION_FAILED status occurs even if only one ProposalAction fails and other actions are successful. (IN_PROGRESS, APPROVED, REJECTED, EXPIRED, ACTION_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags assigned to the proposal. Each tag consists of a key and optional value. For more information about tags, see Tagging Resources in the Amazon Managed Blockchain Ethereum Developer Guide, or Tagging Resources in the Amazon Managed Blockchain Hyperledger Fabric Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="yes_vote_count" /></td>
    <td><code>integer</code></td>
    <td>The current total of YES votes cast on the proposal by members.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_proposals">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The pagination token that indicates the next set of results to retrieve.</td>
</tr>
<tr>
    <td><CopyableCode code="proposals" /></td>
    <td><code>array</code></td>
    <td>The summary of each proposal made on the network.</td>
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
    <td><a href="#get_proposal"><CopyableCode code="get_proposal" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-proposal_id"><code>proposal_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns detailed information about a proposal. Applies only to Hyperledger Fabric.</td>
</tr>
<tr>
    <td><a href="#list_proposals"><CopyableCode code="list_proposals" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of proposals for the network. Applies only to Hyperledger Fabric.</td>
</tr>
<tr>
    <td><a href="#create_proposal"><CopyableCode code="create_proposal" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClientRequestToken"><code>ClientRequestToken</code></a>, <a href="#parameter-MemberId"><code>MemberId</code></a>, <a href="#parameter-Actions"><code>Actions</code></a></td>
    <td></td>
    <td>Creates a proposal for a change to the network that other members of the network can vote on, for example, a proposal to add a new member to the network. Any member can create a proposal. Applies only to Hyperledger Fabric.</td>
</tr>
<tr>
    <td><a href="#vote_on_proposal"><CopyableCode code="vote_on_proposal" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-proposal_id"><code>proposal_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-VoterMemberId"><code>VoterMemberId</code></a>, <a href="#parameter-Vote"><code>Vote</code></a></td>
    <td></td>
    <td>Casts a vote for a specified ProposalId on behalf of a member. The member to vote as, specified by VoterMemberId, must be in the same Amazon Web Services account as the principal that calls the action. Applies only to Hyperledger Fabric.</td>
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
<tr id="parameter-network_id">
    <td><CopyableCode code="network_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the network.</td>
</tr>
<tr id="parameter-proposal_id">
    <td><CopyableCode code="proposal_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the proposal.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of proposals to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token that indicates the next set of results to retrieve.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_proposal"
    values={[
        { label: 'get_proposal', value: 'get_proposal' },
        { label: 'list_proposals', value: 'list_proposals' }
    ]}
>
<TabItem value="get_proposal">

Returns detailed information about a proposal. Applies only to Hyperledger Fabric.

```sql
SELECT
actions,
arn,
creation_date,
description,
expiration_date,
network_id,
no_vote_count,
outstanding_vote_count,
proposal_id,
proposed_by_member_id,
proposed_by_member_name,
status,
tags,
yes_vote_count
FROM aws.managedblockchain.proposals
WHERE network_id = '{{ network_id }}' -- required
AND proposal_id = '{{ proposal_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_proposals">

Returns a list of proposals for the network. Applies only to Hyperledger Fabric.

```sql
SELECT
next_token,
proposals
FROM aws.managedblockchain.proposals
WHERE network_id = '{{ network_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_proposal"
    values={[
        { label: 'create_proposal', value: 'create_proposal' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_proposal">

Creates a proposal for a change to the network that other members of the network can vote on, for example, a proposal to add a new member to the network. Any member can create a proposal. Applies only to Hyperledger Fabric.

```sql
INSERT INTO aws.managedblockchain.proposals (
ClientRequestToken,
MemberId,
Actions,
Description,
Tags,
network_id,
region
)
SELECT 
'{{ ClientRequestToken }}' /* required */,
'{{ MemberId }}' /* required */,
'{{ Actions }}' /* required */,
'{{ Description }}',
'{{ Tags }}',
'{{ network_id }}',
'{{ region }}'
RETURNING
proposal_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: proposals
  props:
    - name: network_id
      value: "{{ network_id }}"
      description: Required parameter for the proposals resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the proposals resource.
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
    - name: MemberId
      value: "{{ MemberId }}"
    - name: Actions
      description: |
        The actions to carry out if a proposal is APPROVED. Applies only to Hyperledger Fabric.
      value:
        Invitations:
          - Principal: "{{ Principal }}"
        Removals:
          - MemberId: "{{ MemberId }}"
    - name: Description
      value: "{{ Description }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="vote_on_proposal"
    values={[
        { label: 'vote_on_proposal', value: 'vote_on_proposal' }
    ]}
>
<TabItem value="vote_on_proposal">

Casts a vote for a specified ProposalId on behalf of a member. The member to vote as, specified by VoterMemberId, must be in the same Amazon Web Services account as the principal that calls the action. Applies only to Hyperledger Fabric.

```sql
EXEC aws.managedblockchain.proposals.vote_on_proposal 
@network_id='{{ network_id }}' --required, 
@proposal_id='{{ proposal_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"VoterMemberId": "{{ VoterMemberId }}", 
"Vote": "{{ Vote }}"
}'
;
```
</TabItem>
</Tabs>
