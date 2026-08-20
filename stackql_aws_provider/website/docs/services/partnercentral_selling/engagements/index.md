--- 
title: engagements
hide_title: false
hide_table_of_contents: false
keywords:
  - engagements
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

Creates, updates, deletes, gets or lists an <code>engagements</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="engagements" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.partnercentral_selling.engagements" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_engagement"
    values={[
        { label: 'get_engagement', value: 'get_engagement' },
        { label: 'list_engagements', value: 'list_engagements' }
    ]}
>
<TabItem value="get_engagement">

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
    <td>The Amazon Resource Name (ARN) of the engagement retrieved. (pattern: &lt;code&gt;arn:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="contexts" /></td>
    <td><code>array</code></td>
    <td>A list of context objects associated with the engagement. Each context provides additional information related to the Engagement, such as customer projects or documents.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the Engagement was created, presented in ISO 8601 format (UTC). For example: "2023-05-01T20:37:46Z". This timestamp helps track the lifecycle of the Engagement.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The AWS account ID of the user who originally created the engagement. This field helps in tracking the origin of the engagement. (pattern: &lt;code&gt;(&#91;0-9&#93;&#123;12&#125;|\w&#123;1,12&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A more detailed description of the engagement. This provides additional context or information about the engagement's purpose or scope. (pattern: &lt;code&gt;(?s).&#123;0,255&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique resource identifier of the engagement retrieved. (pattern: &lt;code&gt;eng-&#91;0-9a-z&#93;&#123;14&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="member_count" /></td>
    <td><code>integer</code></td>
    <td>Specifies the current count of members participating in the Engagement. This count includes all active members regardless of their roles or permissions within the Engagement.</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp indicating when the engagement was last modified, in ISO 8601 format (UTC). Example: "2023-05-01T20:37:46Z". This helps track the most recent changes to the engagement.</td>
</tr>
<tr>
    <td><CopyableCode code="modified_by" /></td>
    <td><code>string</code></td>
    <td>The AWS account ID of the user who last modified the engagement. This field helps track who made the most recent changes to the engagement. (pattern: &lt;code&gt;(&#91;0-9&#93;&#123;12&#125;|\w&#123;1,12&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>The title of the engagement. It provides a brief, descriptive name for the engagement that is meaningful and easily recognizable. (pattern: &lt;code&gt;(?s).&#123;0,40&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_engagements">

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
    <td>The Amazon Resource Name (ARN) of the created Engagement. (pattern: &lt;code&gt;arn:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="context_types" /></td>
    <td><code>array</code></td>
    <td>An array of context types associated with the engagement, such as "CustomerProject" or "Lead". This provides a quick overview of the types of contexts included in the engagement.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the Engagement was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The AWS Account ID of the Engagement creator. (pattern: &lt;code&gt;(&#91;0-9&#93;&#123;12&#125;|\w&#123;1,12&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the Engagement. (pattern: &lt;code&gt;eng-&#91;0-9a-z&#93;&#123;14&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="member_count" /></td>
    <td><code>integer</code></td>
    <td>The number of members in the Engagement.</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp indicating when the engagement was last modified, in ISO 8601 format (UTC). Example: "2023-05-01T20:37:46Z".</td>
</tr>
<tr>
    <td><CopyableCode code="modified_by" /></td>
    <td><code>string</code></td>
    <td>The AWS account ID of the user who last modified the engagement. This field helps track who made the most recent changes to the engagement. (pattern: &lt;code&gt;(&#91;0-9&#93;&#123;12&#125;|\w&#123;1,12&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>The title of the Engagement. (pattern: &lt;code&gt;(?s).&#123;0,40&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_engagement"><CopyableCode code="get_engagement" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Use this action to retrieve the engagement record for a given EngagementIdentifier.</td>
</tr>
<tr>
    <td><a href="#list_engagements"><CopyableCode code="list_engagements" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This action allows users to retrieve a list of Engagement records from Partner Central. This action can be used to manage and track various engagements across different stages of the partner selling process.</td>
</tr>
<tr>
    <td><a href="#create_engagement_context"><CopyableCode code="create_engagement_context" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Catalog"><code>Catalog</code></a>, <a href="#parameter-EngagementIdentifier"><code>EngagementIdentifier</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-Type"><code>Type</code></a>, <a href="#parameter-Payload"><code>Payload</code></a></td>
    <td></td>
    <td>Creates a new context within an existing engagement. This action allows you to add contextual information such as customer projects or documents to an engagement, providing additional details that help facilitate collaboration between engagement members.</td>
</tr>
<tr>
    <td><a href="#create_engagement"><CopyableCode code="create_engagement" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Catalog"><code>Catalog</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td></td>
    <td>The CreateEngagement action allows you to create an Engagement, which serves as a collaborative space between different parties such as AWS Partners and AWS Sellers. This action automatically adds the caller's AWS account as an active member of the newly created Engagement.</td>
</tr>
<tr>
    <td><a href="#update_engagement_context"><CopyableCode code="update_engagement_context" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Catalog"><code>Catalog</code></a>, <a href="#parameter-EngagementIdentifier"><code>EngagementIdentifier</code></a>, <a href="#parameter-ContextIdentifier"><code>ContextIdentifier</code></a>, <a href="#parameter-EngagementLastModifiedAt"><code>EngagementLastModifiedAt</code></a>, <a href="#parameter-Type"><code>Type</code></a>, <a href="#parameter-Payload"><code>Payload</code></a></td>
    <td></td>
    <td>Updates the context information for an existing engagement with new or modified data.</td>
</tr>
<tr>
    <td><a href="#accept_engagement_invitation"><CopyableCode code="accept_engagement_invitation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Catalog"><code>Catalog</code></a>, <a href="#parameter-Identifier"><code>Identifier</code></a></td>
    <td></td>
    <td>Use the AcceptEngagementInvitation action to accept an engagement invitation shared by AWS. Accepting the invitation indicates your willingness to participate in the engagement, granting you access to all engagement-related data.</td>
</tr>
<tr>
    <td><a href="#reject_engagement_invitation"><CopyableCode code="reject_engagement_invitation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Catalog"><code>Catalog</code></a>, <a href="#parameter-Identifier"><code>Identifier</code></a></td>
    <td></td>
    <td>This action rejects an EngagementInvitation that AWS shared. Rejecting an invitation indicates that the partner doesn't want to pursue the opportunity, and all related data will become inaccessible thereafter.</td>
</tr>
<tr>
    <td><a href="#start_engagement_by_accepting_invitation_task"><CopyableCode code="start_engagement_by_accepting_invitation_task" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Catalog"><code>Catalog</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-Identifier"><code>Identifier</code></a></td>
    <td></td>
    <td>This action starts the engagement by accepting an EngagementInvitation. The task is asynchronous and involves the following steps: accepting the invitation, creating an opportunity in the partner’s account from the AWS opportunity, and copying details for tracking. When completed, an Opportunity Created event is generated, indicating that the opportunity has been successfully created in the partner's account.</td>
</tr>
<tr>
    <td><a href="#start_engagement_from_opportunity_task"><CopyableCode code="start_engagement_from_opportunity_task" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Catalog"><code>Catalog</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-Identifier"><code>Identifier</code></a>, <a href="#parameter-AwsSubmission"><code>AwsSubmission</code></a></td>
    <td></td>
    <td>Similar to StartEngagementByAcceptingInvitationTask, this action is asynchronous and performs multiple steps before completion. This action orchestrates a comprehensive workflow that combines multiple API operations into a single task to create and initiate an engagement from an existing opportunity. It automatically executes a sequence of operations including GetOpportunity, CreateEngagement (if it doesn't exist), CreateResourceSnapshot, CreateResourceSnapshotJob, CreateEngagementInvitation (if not already invited/accepted), and SubmitOpportunity.</td>
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
    defaultValue="get_engagement"
    values={[
        { label: 'get_engagement', value: 'get_engagement' },
        { label: 'list_engagements', value: 'list_engagements' }
    ]}
>
<TabItem value="get_engagement">

Use this action to retrieve the engagement record for a given EngagementIdentifier.

```sql
SELECT
arn,
contexts,
created_at,
created_by,
description,
id,
member_count,
modified_at,
modified_by,
title
FROM aws.partnercentral_selling.engagements
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_engagements">

This action allows users to retrieve a list of Engagement records from Partner Central. This action can be used to manage and track various engagements across different stages of the partner selling process.

```sql
SELECT
arn,
context_types,
created_at,
created_by,
id,
member_count,
modified_at,
modified_by,
title
FROM aws.partnercentral_selling.engagements
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_engagement_context"
    values={[
        { label: 'create_engagement_context', value: 'create_engagement_context' },
        { label: 'create_engagement', value: 'create_engagement' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_engagement_context">

Creates a new context within an existing engagement. This action allows you to add contextual information such as customer projects or documents to an engagement, providing additional details that help facilitate collaboration between engagement members.

```sql
INSERT INTO aws.partnercentral_selling.engagements (
Catalog,
EngagementIdentifier,
ClientToken,
Type,
Payload,
region
)
SELECT 
'{{ Catalog }}' /* required */,
'{{ EngagementIdentifier }}' /* required */,
'{{ ClientToken }}' /* required */,
'{{ Type }}' /* required */,
'{{ Payload }}' /* required */,
'{{ region }}'
RETURNING
context_id,
engagement_arn,
engagement_id,
engagement_last_modified_at
;
```
</TabItem>
<TabItem value="create_engagement">

The CreateEngagement action allows you to create an Engagement, which serves as a collaborative space between different parties such as AWS Partners and AWS Sellers. This action automatically adds the caller's AWS account as an active member of the newly created Engagement.

```sql
INSERT INTO aws.partnercentral_selling.engagements (
Catalog,
ClientToken,
Title,
Description,
Contexts,
region
)
SELECT 
'{{ Catalog }}' /* required */,
'{{ ClientToken }}' /* required */,
'{{ Title }}',
'{{ Description }}',
'{{ Contexts }}',
'{{ region }}'
RETURNING
arn,
id,
modified_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: engagements
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the engagements resource.
    - name: Catalog
      value: "{{ Catalog }}"
      description: |
        The CreateEngagementRequest$Catalog parameter specifies the catalog related to the engagement. Accepted values are AWS and Sandbox, which determine the environment in which the engagement is managed.
    - name: EngagementIdentifier
      value: "{{ EngagementIdentifier }}"
      description: |
        The unique identifier of the Engagement for which the context is being created. This parameter ensures the context is associated with the correct engagement and provides the necessary linkage between the engagement and its contextual information.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        The CreateEngagementRequest$ClientToken parameter specifies a unique, case-sensitive identifier to ensure that the request is handled exactly once. The value must not exceed sixty-four alphanumeric characters.
    - name: Type
      value: "{{ Type }}"
      description: |
        Specifies the type of context being created for the engagement. This field determines the structure and content of the context payload. Valid values include CustomerProject for customer project-related contexts. The type field ensures that the context is properly categorized and processed according to its intended purpose.
      valid_values: ['CustomerProject', 'Lead', 'ProspectingResult']
    - name: Payload
      description: |
        Represents the payload of an Engagement context. The structure of this payload varies based on the context type specified in the EngagementContextDetails.
      value:
        CustomerProject:
          Customer:
            Industry: "{{ Industry }}"
            CompanyName: "{{ CompanyName }}"
            WebsiteUrl: "{{ WebsiteUrl }}"
            CountryCode: "{{ CountryCode }}"
          Project:
            Title: "{{ Title }}"
            BusinessProblem: "{{ BusinessProblem }}"
            TargetCompletionDate: "{{ TargetCompletionDate }}"
        Lead:
          Insights:
            LeadReadinessScore: "{{ LeadReadinessScore }}"
          QualificationStatus: "{{ QualificationStatus }}"
          Customer:
            Industry: "{{ Industry }}"
            CompanyName: "{{ CompanyName }}"
            WebsiteUrl: "{{ WebsiteUrl }}"
            Address:
              City: "{{ City }}"
              PostalCode: "{{ PostalCode }}"
              StateOrRegion: "{{ StateOrRegion }}"
              CountryCode: "{{ CountryCode }}"
            AwsMaturity: "{{ AwsMaturity }}"
            MarketSegment: "{{ MarketSegment }}"
          Interactions:
            - SourceType: "{{ SourceType }}"
              SourceId: "{{ SourceId }}"
              SourceName: "{{ SourceName }}"
              Usecase: "{{ Usecase }}"
              InteractionDate: "{{ InteractionDate }}"
              CustomerAction: "{{ CustomerAction }}"
              BusinessProblem: "{{ BusinessProblem }}"
              Contact:
                BusinessTitle: "{{ BusinessTitle }}"
                Email: "{{ Email }}"
                FirstName: "{{ FirstName }}"
                LastName: "{{ LastName }}"
                Phone: "{{ Phone }}"
        ProspectingResult:
          Aws:
            Customer:
              AccountName: "{{ AccountName }}"
              Geo: "{{ Geo }}"
              Region: "{{ Region }}"
              SubRegion: "{{ SubRegion }}"
              Country: "{{ Country }}"
              Industry: "{{ Industry }}"
              SubIndustry: "{{ SubIndustry }}"
              Segment: "{{ Segment }}"
              CompanySize: "{{ CompanySize }}"
              EligiblePrograms:
                - "{{ EligiblePrograms }}"
              PublicProfileSummary: "{{ PublicProfileSummary }}"
            Insights:
              MarketplaceEngagementScore: "{{ MarketplaceEngagementScore }}"
              SolutionScore: "{{ SolutionScore }}"
              SolutionCategory: "{{ SolutionCategory }}"
              SolutionSubCategory: "{{ SolutionSubCategory }}"
            StartTime: "{{ StartTime }}"
            EndTime: "{{ EndTime }}"
            TaskId: "{{ TaskId }}"
            TaskArn: "{{ TaskArn }}"
            TaskName: "{{ TaskName }}"
    - name: Title
      value: "{{ Title }}"
      description: |
        Specifies the title of the Engagement.
    - name: Description
      value: "{{ Description }}"
      description: |
        Provides a description of the Engagement.
    - name: Contexts
      description: |
        The Contexts field is a required array of objects, with a maximum of 5 contexts allowed, specifying detailed information about customer projects associated with the Engagement. Each context object contains a Type field indicating the context type, which must be CustomerProject in this version, and a Payload field containing the CustomerProject details. The CustomerProject object is composed of two main components: Customer and Project. The Customer object includes information such as CompanyName, WebsiteUrl, Industry, and CountryCode, providing essential details about the customer. The Project object contains Title, BusinessProblem, and TargetCompletionDate, offering insights into the specific project associated with the customer. This structure allows comprehensive context to be included within the Engagement, facilitating effective collaboration between parties by providing relevant customer and project information.
      value:
        - Id: "{{ Id }}"
          Type: "{{ Type }}"
          Payload:
            CustomerProject:
              Customer:
                Industry: "{{ Industry }}"
                CompanyName: "{{ CompanyName }}"
                WebsiteUrl: "{{ WebsiteUrl }}"
                CountryCode: "{{ CountryCode }}"
              Project:
                Title: "{{ Title }}"
                BusinessProblem: "{{ BusinessProblem }}"
                TargetCompletionDate: "{{ TargetCompletionDate }}"
            Lead:
              Insights:
                LeadReadinessScore: "{{ LeadReadinessScore }}"
              QualificationStatus: "{{ QualificationStatus }}"
              Customer:
                Industry: "{{ Industry }}"
                CompanyName: "{{ CompanyName }}"
                WebsiteUrl: "{{ WebsiteUrl }}"
                Address:
                  City: "{{ City }}"
                  PostalCode: "{{ PostalCode }}"
                  StateOrRegion: "{{ StateOrRegion }}"
                  CountryCode: "{{ CountryCode }}"
                AwsMaturity: "{{ AwsMaturity }}"
                MarketSegment: "{{ MarketSegment }}"
              Interactions:
                - SourceType: "{{ SourceType }}"
                  SourceId: "{{ SourceId }}"
                  SourceName: "{{ SourceName }}"
                  Usecase: "{{ Usecase }}"
                  InteractionDate: "{{ InteractionDate }}"
                  CustomerAction: "{{ CustomerAction }}"
                  BusinessProblem: "{{ BusinessProblem }}"
                  Contact:
                    BusinessTitle: "{{ BusinessTitle }}"
                    Email: "{{ Email }}"
                    FirstName: "{{ FirstName }}"
                    LastName: "{{ LastName }}"
                    Phone: "{{ Phone }}"
            ProspectingResult:
              Aws:
                Customer:
                  AccountName: "{{ AccountName }}"
                  Geo: "{{ Geo }}"
                  Region: "{{ Region }}"
                  SubRegion: "{{ SubRegion }}"
                  Country: "{{ Country }}"
                  Industry: "{{ Industry }}"
                  SubIndustry: "{{ SubIndustry }}"
                  Segment: "{{ Segment }}"
                  CompanySize: "{{ CompanySize }}"
                  EligiblePrograms: "{{ EligiblePrograms }}"
                  PublicProfileSummary: "{{ PublicProfileSummary }}"
                Insights:
                  MarketplaceEngagementScore: "{{ MarketplaceEngagementScore }}"
                  SolutionScore: "{{ SolutionScore }}"
                  SolutionCategory: "{{ SolutionCategory }}"
                  SolutionSubCategory: "{{ SolutionSubCategory }}"
                StartTime: "{{ StartTime }}"
                EndTime: "{{ EndTime }}"
                TaskId: "{{ TaskId }}"
                TaskArn: "{{ TaskArn }}"
                TaskName: "{{ TaskName }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_engagement_context"
    values={[
        { label: 'update_engagement_context', value: 'update_engagement_context' }
    ]}
>
<TabItem value="update_engagement_context">

Updates the context information for an existing engagement with new or modified data.

```sql
UPDATE aws.partnercentral_selling.engagements
SET 
Catalog = '{{ Catalog }}',
EngagementIdentifier = '{{ EngagementIdentifier }}',
ContextIdentifier = '{{ ContextIdentifier }}',
EngagementLastModifiedAt = '{{ EngagementLastModifiedAt }}',
Type = '{{ Type }}',
Payload = '{{ Payload }}'
WHERE 
region = '{{ region }}' --required
AND Catalog = '{{ Catalog }}' --required
AND EngagementIdentifier = '{{ EngagementIdentifier }}' --required
AND ContextIdentifier = '{{ ContextIdentifier }}' --required
AND EngagementLastModifiedAt = '{{ EngagementLastModifiedAt }}' --required
AND Type = '{{ Type }}' --required
AND Payload = '{{ Payload }}' --required
RETURNING
context_id,
engagement_arn,
engagement_id,
engagement_last_modified_at;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="accept_engagement_invitation"
    values={[
        { label: 'accept_engagement_invitation', value: 'accept_engagement_invitation' },
        { label: 'reject_engagement_invitation', value: 'reject_engagement_invitation' },
        { label: 'start_engagement_by_accepting_invitation_task', value: 'start_engagement_by_accepting_invitation_task' },
        { label: 'start_engagement_from_opportunity_task', value: 'start_engagement_from_opportunity_task' }
    ]}
>
<TabItem value="accept_engagement_invitation">

Use the AcceptEngagementInvitation action to accept an engagement invitation shared by AWS. Accepting the invitation indicates your willingness to participate in the engagement, granting you access to all engagement-related data.

```sql
EXEC aws.partnercentral_selling.engagements.accept_engagement_invitation 
@region='{{ region }}' --required 
@@json=
'{
"Catalog": "{{ Catalog }}", 
"Identifier": "{{ Identifier }}"
}'
;
```
</TabItem>
<TabItem value="reject_engagement_invitation">

This action rejects an EngagementInvitation that AWS shared. Rejecting an invitation indicates that the partner doesn't want to pursue the opportunity, and all related data will become inaccessible thereafter.

```sql
EXEC aws.partnercentral_selling.engagements.reject_engagement_invitation 
@region='{{ region }}' --required 
@@json=
'{
"Catalog": "{{ Catalog }}", 
"Identifier": "{{ Identifier }}", 
"RejectionReason": "{{ RejectionReason }}"
}'
;
```
</TabItem>
<TabItem value="start_engagement_by_accepting_invitation_task">

This action starts the engagement by accepting an EngagementInvitation. The task is asynchronous and involves the following steps: accepting the invitation, creating an opportunity in the partner’s account from the AWS opportunity, and copying details for tracking. When completed, an Opportunity Created event is generated, indicating that the opportunity has been successfully created in the partner's account.

```sql
EXEC aws.partnercentral_selling.engagements.start_engagement_by_accepting_invitation_task 
@region='{{ region }}' --required 
@@json=
'{
"Catalog": "{{ Catalog }}", 
"ClientToken": "{{ ClientToken }}", 
"Identifier": "{{ Identifier }}", 
"Tags": "{{ Tags }}"
}'
;
```
</TabItem>
<TabItem value="start_engagement_from_opportunity_task">

Similar to StartEngagementByAcceptingInvitationTask, this action is asynchronous and performs multiple steps before completion. This action orchestrates a comprehensive workflow that combines multiple API operations into a single task to create and initiate an engagement from an existing opportunity. It automatically executes a sequence of operations including GetOpportunity, CreateEngagement (if it doesn't exist), CreateResourceSnapshot, CreateResourceSnapshotJob, CreateEngagementInvitation (if not already invited/accepted), and SubmitOpportunity.

```sql
EXEC aws.partnercentral_selling.engagements.start_engagement_from_opportunity_task 
@region='{{ region }}' --required 
@@json=
'{
"Catalog": "{{ Catalog }}", 
"ClientToken": "{{ ClientToken }}", 
"Identifier": "{{ Identifier }}", 
"AwsSubmission": "{{ AwsSubmission }}", 
"Tags": "{{ Tags }}"
}'
;
```
</TabItem>
</Tabs>
