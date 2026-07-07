--- 
title: workloads
hide_title: false
hide_table_of_contents: false
keywords:
  - workloads
  - wellarchitected
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

Creates, updates, deletes, gets or lists a <code>workloads</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workloads" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wellarchitected.workloads" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_workload"
    values={[
        { label: 'get_workload', value: 'get_workload' },
        { label: 'list_workloads', value: 'list_workloads' }
    ]}
>
<TabItem value="get_workload">

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
    <td><CopyableCode code="AccountIds" /></td>
    <td><code>array</code></td>
    <td>The list of Amazon Web Services account IDs associated with the workload.</td>
</tr>
<tr>
    <td><CopyableCode code="Applications" /></td>
    <td><code>array</code></td>
    <td>List of AppRegistry application ARNs associated to the workload.</td>
</tr>
<tr>
    <td><CopyableCode code="ArchitecturalDesign" /></td>
    <td><code>string</code></td>
    <td>The URL of the architectural design for the workload. (pattern: &lt;code&gt;^(|(https?|ftp):\/\/&#91;^\s/$.?#&#93;.&#91;^\s&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AwsRegions" /></td>
    <td><code>array</code></td>
    <td>The list of Amazon Web Services Regions associated with the workload, for example, us-east-2, or ca-central-1.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description for the workload.</td>
</tr>
<tr>
    <td><CopyableCode code="DiscoveryConfig" /></td>
    <td><code>object</code></td>
    <td>Discovery configuration associated to the workload.</td>
</tr>
<tr>
    <td><CopyableCode code="Environment" /></td>
    <td><code>string</code></td>
    <td>The environment for the workload. (PRODUCTION, PREPRODUCTION)</td>
</tr>
<tr>
    <td><CopyableCode code="ImprovementStatus" /></td>
    <td><code>string</code></td>
    <td>The improvement status for a workload. (NOT_APPLICABLE, NOT_STARTED, IN_PROGRESS, COMPLETE, RISK_ACKNOWLEDGED)</td>
</tr>
<tr>
    <td><CopyableCode code="Industry" /></td>
    <td><code>string</code></td>
    <td>The industry for the workload.</td>
</tr>
<tr>
    <td><CopyableCode code="IndustryType" /></td>
    <td><code>string</code></td>
    <td>The industry type for the workload. If specified, must be one of the following: Agriculture Automobile Defense Design and Engineering Digital Advertising Education Environmental Protection Financial Services Gaming General Public Services Healthcare Hospitality InfoTech Justice and Public Safety Life Sciences Manufacturing Media & Entertainment Mining & Resources Oil & Gas Power & Utilities Professional Services Real Estate & Construction Retail & Wholesale Social Protection Telecommunications Travel, Transportation & Logistics Other</td>
</tr>
<tr>
    <td><CopyableCode code="IsReviewOwnerUpdateAcknowledged" /></td>
    <td><code>boolean</code></td>
    <td>Flag indicating whether the workload owner has acknowledged that the Review owner field is required. If a Review owner is not added to the workload within 60 days of acknowledgement, access to the workload is restricted until an owner is added.</td>
</tr>
<tr>
    <td><CopyableCode code="JiraConfiguration" /></td>
    <td><code>object</code></td>
    <td>Jira configuration for a specific workload.</td>
</tr>
<tr>
    <td><CopyableCode code="Lenses" /></td>
    <td><code>array</code></td>
    <td>The list of lenses associated with the workload. Each lens is identified by its LensSummary$LensAlias. If a review template that specifies lenses is applied to the workload, those lenses are applied to the workload in addition to these lenses.</td>
</tr>
<tr>
    <td><CopyableCode code="NonAwsRegions" /></td>
    <td><code>array</code></td>
    <td>The list of non-Amazon Web Services Regions associated with the workload.</td>
</tr>
<tr>
    <td><CopyableCode code="Notes" /></td>
    <td><code>string</code></td>
    <td>The notes associated with the workload. For a review template, these are the notes that will be associated with the workload when the template is applied.</td>
</tr>
<tr>
    <td><CopyableCode code="Owner" /></td>
    <td><code>string</code></td>
    <td>An Amazon Web Services account ID. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PillarPriorities" /></td>
    <td><code>array</code></td>
    <td>The priorities of the pillars, which are used to order items in the improvement plan. Each pillar is represented by its PillarReviewSummary$PillarId.</td>
</tr>
<tr>
    <td><CopyableCode code="PrioritizedRiskCounts" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="Profiles" /></td>
    <td><code>array</code></td>
    <td>Profile associated with a workload.</td>
</tr>
<tr>
    <td><CopyableCode code="ReviewOwner" /></td>
    <td><code>string</code></td>
    <td>The review owner of the workload. The name, email address, or identifier for the primary group or individual that owns the workload review process.</td>
</tr>
<tr>
    <td><CopyableCode code="ReviewRestrictionDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time recorded.</td>
</tr>
<tr>
    <td><CopyableCode code="RiskCounts" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="ShareInvitationId" /></td>
    <td><code>string</code></td>
    <td>The ID assigned to the share invitation. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags associated with the workload.</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time recorded.</td>
</tr>
<tr>
    <td><CopyableCode code="WorkloadArn" /></td>
    <td><code>string</code></td>
    <td>The ARN for the workload.</td>
</tr>
<tr>
    <td><CopyableCode code="WorkloadId" /></td>
    <td><code>string</code></td>
    <td>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="WorkloadName" /></td>
    <td><code>string</code></td>
    <td>The name of the workload. The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_workloads">

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
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next set of results.</td>
</tr>
<tr>
    <td><CopyableCode code="WorkloadSummaries" /></td>
    <td><code>array</code></td>
    <td>A list of workload summaries.</td>
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
    <td><a href="#get_workload"><CopyableCode code="get_workload" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workload_id"><code>workload_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get an existing workload.</td>
</tr>
<tr>
    <td><a href="#list_workloads"><CopyableCode code="list_workloads" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Paginated list of workloads.</td>
</tr>
<tr>
    <td><a href="#create_workload"><CopyableCode code="create_workload" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WorkloadName"><code>WorkloadName</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-Environment"><code>Environment</code></a>, <a href="#parameter-Lenses"><code>Lenses</code></a>, <a href="#parameter-ClientRequestToken"><code>ClientRequestToken</code></a></td>
    <td></td>
    <td>Create a new workload. The owner of a workload can share the workload with other Amazon Web Services accounts, users, an organization, and organizational units (OUs) in the same Amazon Web Services Region. Only the owner of a workload can delete it. For more information, see Defining a Workload in the Well-Architected Tool User Guide. Either AwsRegions, NonAwsRegions, or both must be specified when creating a workload. You also must specify ReviewOwner, even though the parameter is listed as not being required in the following section. When creating a workload using a review template, you must have the following IAM permissions: wellarchitected:GetReviewTemplate wellarchitected:GetReviewTemplateAnswer wellarchitected:ListReviewTemplateAnswers wellarchitected:GetReviewTemplateLensReview</td>
</tr>
<tr>
    <td><a href="#update_integration"><CopyableCode code="update_integration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-workload_id"><code>workload_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClientRequestToken"><code>ClientRequestToken</code></a>, <a href="#parameter-IntegratingService"><code>IntegratingService</code></a></td>
    <td></td>
    <td>Update integration features.</td>
</tr>
<tr>
    <td><a href="#update_workload"><CopyableCode code="update_workload" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-workload_id"><code>workload_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update an existing workload.</td>
</tr>
<tr>
    <td><a href="#delete_workload"><CopyableCode code="delete_workload" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-workload_id"><code>workload_id</code></a>, <a href="#parameter-ClientRequestToken"><code>ClientRequestToken</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete an existing workload.</td>
</tr>
<tr>
    <td><a href="#upgrade_profile_version"><CopyableCode code="upgrade_profile_version" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-workload_id"><code>workload_id</code></a>, <a href="#parameter-profile_arn"><code>profile_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Upgrade a profile.</td>
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
<tr id="parameter-ClientRequestToken">
    <td><CopyableCode code="ClientRequestToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-profile_arn">
    <td><CopyableCode code="profile_arn" /></td>
    <td><code>string</code></td>
    <td>The profile ARN.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-workload_id">
    <td><CopyableCode code="workload_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_workload"
    values={[
        { label: 'get_workload', value: 'get_workload' },
        { label: 'list_workloads', value: 'list_workloads' }
    ]}
>
<TabItem value="get_workload">

Get an existing workload.

```sql
SELECT
AccountIds,
Applications,
ArchitecturalDesign,
AwsRegions,
Description,
DiscoveryConfig,
Environment,
ImprovementStatus,
Industry,
IndustryType,
IsReviewOwnerUpdateAcknowledged,
JiraConfiguration,
Lenses,
NonAwsRegions,
Notes,
Owner,
PillarPriorities,
PrioritizedRiskCounts,
Profiles,
ReviewOwner,
ReviewRestrictionDate,
RiskCounts,
ShareInvitationId,
Tags,
UpdatedAt,
WorkloadArn,
WorkloadId,
WorkloadName
FROM aws.wellarchitected.workloads
WHERE workload_id = '{{ workload_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_workloads">

Paginated list of workloads.

```sql
SELECT
NextToken,
WorkloadSummaries
FROM aws.wellarchitected.workloads
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_workload"
    values={[
        { label: 'create_workload', value: 'create_workload' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_workload">

Create a new workload. The owner of a workload can share the workload with other Amazon Web Services accounts, users, an organization, and organizational units (OUs) in the same Amazon Web Services Region. Only the owner of a workload can delete it. For more information, see Defining a Workload in the Well-Architected Tool User Guide. Either AwsRegions, NonAwsRegions, or both must be specified when creating a workload. You also must specify ReviewOwner, even though the parameter is listed as not being required in the following section. When creating a workload using a review template, you must have the following IAM permissions: wellarchitected:GetReviewTemplate wellarchitected:GetReviewTemplateAnswer wellarchitected:ListReviewTemplateAnswers wellarchitected:GetReviewTemplateLensReview

```sql
INSERT INTO aws.wellarchitected.workloads (
WorkloadName,
Description,
Environment,
AccountIds,
AwsRegions,
NonAwsRegions,
PillarPriorities,
ArchitecturalDesign,
ReviewOwner,
IndustryType,
Industry,
Lenses,
Notes,
ClientRequestToken,
Tags,
DiscoveryConfig,
Applications,
ProfileArns,
ReviewTemplateArns,
JiraConfiguration,
region
)
SELECT 
'{{ WorkloadName }}' /* required */,
'{{ Description }}' /* required */,
'{{ Environment }}' /* required */,
'{{ AccountIds }}',
'{{ AwsRegions }}',
'{{ NonAwsRegions }}',
'{{ PillarPriorities }}',
'{{ ArchitecturalDesign }}',
'{{ ReviewOwner }}',
'{{ IndustryType }}',
'{{ Industry }}',
'{{ Lenses }}' /* required */,
'{{ Notes }}',
'{{ ClientRequestToken }}' /* required */,
'{{ Tags }}',
'{{ DiscoveryConfig }}',
'{{ Applications }}',
'{{ ProfileArns }}',
'{{ ReviewTemplateArns }}',
'{{ JiraConfiguration }}',
'{{ region }}'
RETURNING
WorkloadArn,
WorkloadId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: workloads
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the workloads resource.
    - name: WorkloadName
      value: "{{ WorkloadName }}"
      description: |
        The name of the workload. The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.
    - name: Description
      value: "{{ Description }}"
      description: |
        The description for the workload.
    - name: Environment
      value: "{{ Environment }}"
      description: |
        The environment for the workload.
      valid_values: ['PRODUCTION', 'PREPRODUCTION']
    - name: AccountIds
      value:
        - "{{ AccountIds }}"
      description: |
        The list of Amazon Web Services account IDs associated with the workload.
    - name: AwsRegions
      value:
        - "{{ AwsRegions }}"
      description: |
        The list of Amazon Web Services Regions associated with the workload, for example, us-east-2, or ca-central-1.
    - name: NonAwsRegions
      value:
        - "{{ NonAwsRegions }}"
      description: |
        The list of non-Amazon Web Services Regions associated with the workload.
    - name: PillarPriorities
      value:
        - "{{ PillarPriorities }}"
      description: |
        The priorities of the pillars, which are used to order items in the improvement plan. Each pillar is represented by its PillarReviewSummary$PillarId.
    - name: ArchitecturalDesign
      value: "{{ ArchitecturalDesign }}"
      description: |
        The URL of the architectural design for the workload.
    - name: ReviewOwner
      value: "{{ ReviewOwner }}"
      description: |
        The review owner of the workload. The name, email address, or identifier for the primary group or individual that owns the workload review process.
    - name: IndustryType
      value: "{{ IndustryType }}"
      description: |
        The industry type for the workload. If specified, must be one of the following: Agriculture Automobile Defense Design and Engineering Digital Advertising Education Environmental Protection Financial Services Gaming General Public Services Healthcare Hospitality InfoTech Justice and Public Safety Life Sciences Manufacturing Media & Entertainment Mining & Resources Oil & Gas Power & Utilities Professional Services Real Estate & Construction Retail & Wholesale Social Protection Telecommunications Travel, Transportation & Logistics Other
    - name: Industry
      value: "{{ Industry }}"
      description: |
        The industry for the workload.
    - name: Lenses
      value:
        - "{{ Lenses }}"
      description: |
        The list of lenses associated with the workload. Each lens is identified by its LensSummary$LensAlias. If a review template that specifies lenses is applied to the workload, those lenses are applied to the workload in addition to these lenses.
    - name: Notes
      value: "{{ Notes }}"
      description: |
        The notes associated with the workload. For a review template, these are the notes that will be associated with the workload when the template is applied.
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
      description: |
        A unique case-sensitive string used to ensure that this request is idempotent (executes only once). You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned. This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.
    - name: Tags
      value: "{{ Tags }}"
    - name: DiscoveryConfig
      description: |
        Discovery configuration associated to the workload.
      value:
        TrustedAdvisorIntegrationStatus: "{{ TrustedAdvisorIntegrationStatus }}"
        WorkloadResourceDefinition:
          - "{{ WorkloadResourceDefinition }}"
    - name: Applications
      value:
        - "{{ Applications }}"
    - name: ProfileArns
      value:
        - "{{ ProfileArns }}"
    - name: ReviewTemplateArns
      value:
        - "{{ ReviewTemplateArns }}"
    - name: JiraConfiguration
      description: |
        Workload-level: Input for the Jira configuration.
      value:
        IssueManagementStatus: "{{ IssueManagementStatus }}"
        IssueManagementType: "{{ IssueManagementType }}"
        JiraProjectKey: "{{ JiraProjectKey }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_integration"
    values={[
        { label: 'update_integration', value: 'update_integration' },
        { label: 'update_workload', value: 'update_workload' }
    ]}
>
<TabItem value="update_integration">

Update integration features.

```sql
UPDATE aws.wellarchitected.workloads
SET 
ClientRequestToken = '{{ ClientRequestToken }}',
IntegratingService = '{{ IntegratingService }}'
WHERE 
workload_id = '{{ workload_id }}' --required
AND region = '{{ region }}' --required
AND ClientRequestToken = '{{ ClientRequestToken }}' --required
AND IntegratingService = '{{ IntegratingService }}' --required;
```
</TabItem>
<TabItem value="update_workload">

Update an existing workload.

```sql
UPDATE aws.wellarchitected.workloads
SET 
WorkloadName = '{{ WorkloadName }}',
Description = '{{ Description }}',
Environment = '{{ Environment }}',
AccountIds = '{{ AccountIds }}',
AwsRegions = '{{ AwsRegions }}',
NonAwsRegions = '{{ NonAwsRegions }}',
PillarPriorities = '{{ PillarPriorities }}',
ArchitecturalDesign = '{{ ArchitecturalDesign }}',
ReviewOwner = '{{ ReviewOwner }}',
IsReviewOwnerUpdateAcknowledged = {{ IsReviewOwnerUpdateAcknowledged }},
IndustryType = '{{ IndustryType }}',
Industry = '{{ Industry }}',
Notes = '{{ Notes }}',
ImprovementStatus = '{{ ImprovementStatus }}',
DiscoveryConfig = '{{ DiscoveryConfig }}',
Applications = '{{ Applications }}',
JiraConfiguration = '{{ JiraConfiguration }}'
WHERE 
workload_id = '{{ workload_id }}' --required
AND region = '{{ region }}' --required
RETURNING
Workload;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_workload"
    values={[
        { label: 'delete_workload', value: 'delete_workload' }
    ]}
>
<TabItem value="delete_workload">

Delete an existing workload.

```sql
DELETE FROM aws.wellarchitected.workloads
WHERE workload_id = '{{ workload_id }}' --required
AND ClientRequestToken = '{{ ClientRequestToken }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="upgrade_profile_version"
    values={[
        { label: 'upgrade_profile_version', value: 'upgrade_profile_version' }
    ]}
>
<TabItem value="upgrade_profile_version">

Upgrade a profile.

```sql
EXEC aws.wellarchitected.workloads.upgrade_profile_version 
@workload_id='{{ workload_id }}' --required, 
@profile_arn='{{ profile_arn }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"MilestoneName": "{{ MilestoneName }}", 
"ClientRequestToken": "{{ ClientRequestToken }}"
}'
;
```
</TabItem>
</Tabs>
