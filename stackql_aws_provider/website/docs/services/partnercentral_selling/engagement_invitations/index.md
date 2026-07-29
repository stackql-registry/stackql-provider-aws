--- 
title: engagement_invitations
hide_title: false
hide_table_of_contents: false
keywords:
  - engagement_invitations
  - partnercentral_selling
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

Creates, updates, deletes, gets or lists an <code>engagement_invitations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="engagement_invitations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.partnercentral_selling.engagement_invitations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_engagement_invitation"
    values={[
        { label: 'get_engagement_invitation', value: 'get_engagement_invitation' },
        { label: 'list_engagement_invitations', value: 'list_engagement_invitations' }
    ]}
>
<TabItem value="get_engagement_invitation">

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
    <td>The Amazon Resource Name (ARN) that identifies the engagement invitation.</td>
</tr>
<tr>
    <td><CopyableCode code="catalog" /></td>
    <td><code>string</code></td>
    <td>Indicates the catalog from which the engagement invitation details are retrieved. This field helps in identifying the appropriate catalog (e.g., AWS or Sandbox) used in the request. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="engagement_description" /></td>
    <td><code>string</code></td>
    <td>The description of the engagement associated with this invitation. (pattern: &lt;code&gt;(?s).&#123;0,255&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="engagement_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the engagement associated with this invitation.This ID links the invitation to its corresponding engagement. (pattern: &lt;code&gt;eng-&#91;0-9a-z&#93;&#123;14&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="engagement_title" /></td>
    <td><code>string</code></td>
    <td>The title of the engagement invitation, summarizing the purpose or objectives of the opportunity shared by AWS. (pattern: &lt;code&gt;(?s).&#123;1,40&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="existing_members" /></td>
    <td><code>array</code></td>
    <td>A list of active members currently part of the Engagement. This array contains a maximum of 10 members, each represented by an object with the following properties. CompanyName: The name of the member's company. WebsiteUrl: The website URL of the member's company.</td>
</tr>
<tr>
    <td><CopyableCode code="expiration_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Indicates the date on which the engagement invitation will expire if not accepted by the partner.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier assigned to the engagement invitation being retrieved. (pattern: &lt;code&gt;(?=.&#123;1,255&#125;$)(arn:.*|engi-&#91;0-9a-z&#93;&#123;13&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="invitation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the engagement invitation was sent to the partner.</td>
</tr>
<tr>
    <td><CopyableCode code="invitation_message" /></td>
    <td><code>string</code></td>
    <td>The message sent to the invited partner when the invitation was created. (pattern: &lt;code&gt;(?s).&#123;1,255&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="payload" /></td>
    <td><code>object</code></td>
    <td>Contains the data payload associated with the Engagement Invitation. This payload includes essential details related to the AWS opportunity and is used by partners to evaluate whether to accept or reject the engagement.</td>
</tr>
<tr>
    <td><CopyableCode code="payload_type" /></td>
    <td><code>string</code></td>
    <td>The type of payload contained in the engagement invitation, indicating what data or context the payload covers. (OpportunityInvitation, LeadInvitation)</td>
</tr>
<tr>
    <td><CopyableCode code="receiver" /></td>
    <td><code>object</code></td>
    <td>Represents the entity that received the Engagement Invitation, including account and company details. This field is essential for tracking the partner who is being invited to collaborate.</td>
</tr>
<tr>
    <td><CopyableCode code="rejection_reason" /></td>
    <td><code>string</code></td>
    <td>If the engagement invitation was rejected, this field specifies the reason provided by the partner for the rejection. (pattern: &lt;code&gt;&#91;\u0020-\u007E\u00A0-\uD7FF\uE000-\uFFFD&#93;&#123;1,80&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sender_aws_account_id" /></td>
    <td><code>string</code></td>
    <td>Specifies the AWS Account ID of the sender, which identifies the AWS team responsible for sharing the engagement invitation. (pattern: &lt;code&gt;(&#91;0-9&#93;&#123;12&#125;|\w&#123;1,12&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sender_company_name" /></td>
    <td><code>string</code></td>
    <td>The name of the AWS organization or team that sent the engagement invitation. (pattern: &lt;code&gt;(?s).&#123;0,120&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the engagement invitation. (ACCEPTED, PENDING, REJECTED, EXPIRED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_engagement_invitations">

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
    <td>The Amazon Resource Name (ARN) of the Engagement Invitation. The ARN is a unique identifier that allows partners to reference the invitation in their system and manage its lifecycle.</td>
</tr>
<tr>
    <td><CopyableCode code="catalog" /></td>
    <td><code>string</code></td>
    <td>Specifies the catalog in which the Engagement Invitation resides. This can be either the AWS or Sandbox catalog, indicating whether the opportunity is live or being tested. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="engagement_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Engagement associated with this invitation. This links the invitation to its parent Engagement. (pattern: &lt;code&gt;eng-&#91;0-9a-z&#93;&#123;14&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="engagement_title" /></td>
    <td><code>string</code></td>
    <td>Provides a short title or description of the Engagement Invitation. This title helps partners quickly identify and differentiate between multiple engagement opportunities. (pattern: &lt;code&gt;(?s).&#123;1,40&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="expiration_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Indicates the date and time when the Engagement Invitation will expire. After this date, the invitation can no longer be accepted, and the opportunity will be unavailable to the partner.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Represents the unique identifier of the Engagement Invitation. This identifier is used to track the invitation and to manage responses like acceptance or rejection. (pattern: &lt;code&gt;(?=.&#123;1,255&#125;$)(arn:.*|engi-&#91;0-9a-z&#93;&#123;13&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="invitation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Indicates the date when the Engagement Invitation was sent to the partner. This provides context for when the opportunity was shared and helps in tracking the timeline for engagement.</td>
</tr>
<tr>
    <td><CopyableCode code="participant_type" /></td>
    <td><code>string</code></td>
    <td>Identifies the role of the caller in the engagement invitation. (SENDER, RECEIVER)</td>
</tr>
<tr>
    <td><CopyableCode code="payload_type" /></td>
    <td><code>string</code></td>
    <td>Describes the type of payload associated with the Engagement Invitation, such as Opportunity or MarketplaceOffer. This helps partners understand the nature of the engagement request from AWS. (OpportunityInvitation, LeadInvitation)</td>
</tr>
<tr>
    <td><CopyableCode code="receiver" /></td>
    <td><code>object</code></td>
    <td>Represents the entity that received the Engagement Invitation, including account and company details. This field is essential for tracking the partner who is being invited to collaborate.</td>
</tr>
<tr>
    <td><CopyableCode code="sender_aws_account_id" /></td>
    <td><code>string</code></td>
    <td>Specifies the AWS account ID of the sender who initiated the Engagement Invitation. This allows the partner to identify the AWS entity or representative responsible for sharing the opportunity. (pattern: &lt;code&gt;(&#91;0-9&#93;&#123;12&#125;|\w&#123;1,12&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sender_company_name" /></td>
    <td><code>string</code></td>
    <td>Indicates the name of the company or AWS division that sent the Engagement Invitation. This information is useful for partners to know which part of AWS is requesting engagement. (pattern: &lt;code&gt;(?s).&#123;0,120&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Represents the current status of the Engagement Invitation, such as Pending, Accepted, or Rejected. The status helps track the progress and response to the invitation. (ACCEPTED, PENDING, REJECTED, EXPIRED)</td>
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
    <td><a href="#get_engagement_invitation"><CopyableCode code="get_engagement_invitation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the details of an engagement invitation shared by AWS with a partner. The information includes aspects such as customer, project details, and lifecycle information. To connect an engagement invitation with an opportunity, match the invitation’s Payload.Project.Title with opportunity Project.Title.</td>
</tr>
<tr>
    <td><a href="#list_engagement_invitations"><CopyableCode code="list_engagement_invitations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of engagement invitations sent to the partner. This allows partners to view all pending or past engagement invitations, helping them track opportunities shared by AWS.</td>
</tr>
<tr>
    <td><a href="#create_engagement_invitation"><CopyableCode code="create_engagement_invitation" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-EngagementIdentifier"><code>EngagementIdentifier</code></a>, <a href="#parameter-Invitation"><code>Invitation</code></a></td>
    <td></td>
    <td>This action creates an invitation from a sender to a single receiver to join an engagement.</td>
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
    defaultValue="get_engagement_invitation"
    values={[
        { label: 'get_engagement_invitation', value: 'get_engagement_invitation' },
        { label: 'list_engagement_invitations', value: 'list_engagement_invitations' }
    ]}
>
<TabItem value="get_engagement_invitation">

Retrieves the details of an engagement invitation shared by AWS with a partner. The information includes aspects such as customer, project details, and lifecycle information. To connect an engagement invitation with an opportunity, match the invitation’s Payload.Project.Title with opportunity Project.Title.

```sql
SELECT
arn,
catalog,
engagement_description,
engagement_id,
engagement_title,
existing_members,
expiration_date,
id,
invitation_date,
invitation_message,
payload,
payload_type,
receiver,
rejection_reason,
sender_aws_account_id,
sender_company_name,
status
FROM aws.partnercentral_selling.engagement_invitations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_engagement_invitations">

Retrieves a list of engagement invitations sent to the partner. This allows partners to view all pending or past engagement invitations, helping them track opportunities shared by AWS.

```sql
SELECT
arn,
catalog,
engagement_id,
engagement_title,
expiration_date,
id,
invitation_date,
participant_type,
payload_type,
receiver,
sender_aws_account_id,
sender_company_name,
status
FROM aws.partnercentral_selling.engagement_invitations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_engagement_invitation"
    values={[
        { label: 'create_engagement_invitation', value: 'create_engagement_invitation' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_engagement_invitation">

This action creates an invitation from a sender to a single receiver to join an engagement.

```sql
INSERT INTO aws.partnercentral_selling.engagement_invitations (
Catalog,
ClientToken,
EngagementIdentifier,
Invitation,
region
)
SELECT 
'{{ Catalog }}',
'{{ ClientToken }}' /* required */,
'{{ EngagementIdentifier }}' /* required */,
'{{ Invitation }}' /* required */,
'{{ region }}'
RETURNING
arn,
id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: engagement_invitations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the engagement_invitations resource.
    - name: Catalog
      value: "{{ Catalog }}"
      description: |
        Specifies the catalog related to the engagement. Accepted values are AWS and Sandbox, which determine the environment in which the engagement is managed.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        Specifies a unique, client-generated UUID to ensure that the request is handled exactly once. This token helps prevent duplicate invitation creations.
    - name: EngagementIdentifier
      value: "{{ EngagementIdentifier }}"
      description: |
        The unique identifier of the Engagement associated with the invitation. This parameter ensures the invitation is created within the correct Engagement context.
    - name: Invitation
      description: |
        The Invitation object all information necessary to initiate an engagement invitation to a partner. It contains a personalized message from the sender, the invitation's receiver, and a payload. The Payload can be the OpportunityInvitation, which includes detailed structures for sender contacts, partner responsibilities, customer information, and project details, or LeadInvitation, which includes structures for customer information and interaction details.
      value:
        Message: "{{ Message }}"
        Receiver:
          Account:
            Alias: "{{ Alias }}"
            AwsAccountId: "{{ AwsAccountId }}"
        Payload:
          OpportunityInvitation:
            SenderContacts:
              - Email: "{{ Email }}"
                FirstName: "{{ FirstName }}"
                LastName: "{{ LastName }}"
                BusinessTitle: "{{ BusinessTitle }}"
                Phone: "{{ Phone }}"
            ReceiverResponsibilities:
              - "{{ ReceiverResponsibilities }}"
            Customer:
              Industry: "{{ Industry }}"
              CompanyName: "{{ CompanyName }}"
              WebsiteUrl: "{{ WebsiteUrl }}"
              CountryCode: "{{ CountryCode }}"
            Project:
              BusinessProblem: "{{ BusinessProblem }}"
              Title: "{{ Title }}"
              TargetCompletionDate: "{{ TargetCompletionDate }}"
              ExpectedCustomerSpend:
                - Amount: "{{ Amount }}"
                  CurrencyCode: "{{ CurrencyCode }}"
                  Frequency: "{{ Frequency }}"
                  TargetCompany: "{{ TargetCompany }}"
                  EstimationUrl: "{{ EstimationUrl }}"
          LeadInvitation:
            Customer:
              Industry: "{{ Industry }}"
              CompanyName: "{{ CompanyName }}"
              WebsiteUrl: "{{ WebsiteUrl }}"
              CountryCode: "{{ CountryCode }}"
              AwsMaturity: "{{ AwsMaturity }}"
              MarketSegment: "{{ MarketSegment }}"
            Interaction:
              SourceType: "{{ SourceType }}"
              SourceId: "{{ SourceId }}"
              SourceName: "{{ SourceName }}"
              Usecase: "{{ Usecase }}"
              ContactBusinessTitle: "{{ ContactBusinessTitle }}"
`}</CodeBlock>

</TabItem>
</Tabs>
