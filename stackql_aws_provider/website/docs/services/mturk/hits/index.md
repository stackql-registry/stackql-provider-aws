--- 
title: hits
hide_title: false
hide_table_of_contents: false
keywords:
  - hits
  - mturk
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

Creates, updates, deletes, gets or lists a <code>hits</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="hits" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mturk.hits" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_hit"
    values={[
        { label: 'get_hit', value: 'get_hit' }
    ]}
>
<TabItem value="get_hit">

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
    <td><CopyableCode code="AssignmentDurationInSeconds" /></td>
    <td><code>integer (int64)</code></td>
    <td>The length of time, in seconds, that a Worker has to complete the HIT after accepting it.</td>
</tr>
<tr>
    <td><CopyableCode code="AutoApprovalDelayInSeconds" /></td>
    <td><code>integer (int64)</code></td>
    <td>The amount of time, in seconds, after the Worker submits an assignment for the HIT that the results are automatically approved by Amazon Mechanical Turk. This is the amount of time the Requester has to reject an assignment submitted by a Worker before the assignment is auto-approved and the Worker is paid.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the HIT was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A general description of the HIT.</td>
</tr>
<tr>
    <td><CopyableCode code="Expiration" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the HIT expires.</td>
</tr>
<tr>
    <td><CopyableCode code="HITGroupId" /></td>
    <td><code>string</code></td>
    <td>The ID of the HIT Group of this HIT. (pattern: &lt;code&gt;^&#91;A-Z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="HITId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the HIT. (pattern: &lt;code&gt;^&#91;A-Z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="HITLayoutId" /></td>
    <td><code>string</code></td>
    <td>The ID of the HIT Layout of this HIT. (pattern: &lt;code&gt;^&#91;A-Z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="HITReviewStatus" /></td>
    <td><code>string</code></td>
    <td>Indicates the review status of the HIT. Valid Values are NotReviewed | MarkedForReview | ReviewedAppropriate | ReviewedInappropriate. (NotReviewed, MarkedForReview, ReviewedAppropriate, ReviewedInappropriate)</td>
</tr>
<tr>
    <td><CopyableCode code="HITStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the HIT and its assignments. Valid Values are Assignable | Unassignable | Reviewable | Reviewing | Disposed. (Assignable, Unassignable, Reviewable, Reviewing, Disposed)</td>
</tr>
<tr>
    <td><CopyableCode code="HITTypeId" /></td>
    <td><code>string</code></td>
    <td>The ID of the HIT type of this HIT (pattern: &lt;code&gt;^&#91;A-Z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Keywords" /></td>
    <td><code>string</code></td>
    <td>One or more words or phrases that describe the HIT, separated by commas. Search terms similar to the keywords of a HIT are more likely to have the HIT in the search results.</td>
</tr>
<tr>
    <td><CopyableCode code="MaxAssignments" /></td>
    <td><code>integer</code></td>
    <td>The number of times the HIT can be accepted and completed before the HIT becomes unavailable.</td>
</tr>
<tr>
    <td><CopyableCode code="NumberOfAssignmentsAvailable" /></td>
    <td><code>integer</code></td>
    <td>The number of assignments for this HIT that are available for Workers to accept.</td>
</tr>
<tr>
    <td><CopyableCode code="NumberOfAssignmentsCompleted" /></td>
    <td><code>integer</code></td>
    <td>The number of assignments for this HIT that have been approved or rejected.</td>
</tr>
<tr>
    <td><CopyableCode code="NumberOfAssignmentsPending" /></td>
    <td><code>integer</code></td>
    <td>The number of assignments for this HIT that are being previewed or have been accepted by Workers, but have not yet been submitted, returned, or abandoned.</td>
</tr>
<tr>
    <td><CopyableCode code="QualificationRequirements" /></td>
    <td><code>array</code></td>
    <td>Conditions that a Worker's Qualifications must meet in order to accept the HIT. A HIT can have between zero and ten Qualification requirements. All requirements must be met in order for a Worker to accept the HIT. Additionally, other actions can be restricted using the ActionsGuarded field on each QualificationRequirement structure.</td>
</tr>
<tr>
    <td><CopyableCode code="Question" /></td>
    <td><code>string</code></td>
    <td>The data the Worker completing the HIT uses produce the results. This is either either a QuestionForm, HTMLQuestion or an ExternalQuestion data structure.</td>
</tr>
<tr>
    <td><CopyableCode code="RequesterAnnotation" /></td>
    <td><code>string</code></td>
    <td>An arbitrary data field the Requester who created the HIT can use. This field is visible only to the creator of the HIT.</td>
</tr>
<tr>
    <td><CopyableCode code="Reward" /></td>
    <td><code>string</code></td>
    <td>A string representing a currency amount. (pattern: &lt;code&gt;^&#91;0-9&#93;+(\.)?&#91;0-9&#93;&#123;0,2&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Title" /></td>
    <td><code>string</code></td>
    <td>The title of the HIT.</td>
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
    <td><a href="#get_hit"><CopyableCode code="get_hit" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The GetHIT operation retrieves the details of the specified HIT.</td>
</tr>
<tr>
    <td><a href="#create_hit"><CopyableCode code="create_hit" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LifetimeInSeconds"><code>LifetimeInSeconds</code></a>, <a href="#parameter-AssignmentDurationInSeconds"><code>AssignmentDurationInSeconds</code></a>, <a href="#parameter-Reward"><code>Reward</code></a>, <a href="#parameter-Title"><code>Title</code></a>, <a href="#parameter-Description"><code>Description</code></a></td>
    <td></td>
    <td>The CreateHIT operation creates a new Human Intelligence Task (HIT). The new HIT is made available for Workers to find and accept on the Amazon Mechanical Turk website. This operation allows you to specify a new HIT by passing in values for the properties of the HIT, such as its title, reward amount and number of assignments. When you pass these values to CreateHIT, a new HIT is created for you, with a new HITTypeID. The HITTypeID can be used to create additional HITs in the future without needing to specify common parameters such as the title, description and reward amount each time. An alternative way to create HITs is to first generate a HITTypeID using the CreateHITType operation and then call the CreateHITWithHITType operation. This is the recommended best practice for Requesters who are creating large numbers of HITs. CreateHIT also supports several ways to provide question data: by providing a value for the Question parameter that fully specifies the contents of the HIT, or by providing a HitLayoutId and associated HitLayoutParameters. If a HIT is created with 10 or more maximum assignments, there is an additional fee. For more information, see Amazon Mechanical Turk Pricing.</td>
</tr>
<tr>
    <td><a href="#create_hit_type"><CopyableCode code="create_hit_type" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AssignmentDurationInSeconds"><code>AssignmentDurationInSeconds</code></a>, <a href="#parameter-Reward"><code>Reward</code></a>, <a href="#parameter-Title"><code>Title</code></a>, <a href="#parameter-Description"><code>Description</code></a></td>
    <td></td>
    <td>The CreateHITType operation creates a new HIT type. This operation allows you to define a standard set of HIT properties to use when creating HITs. If you register a HIT type with values that match an existing HIT type, the HIT type ID of the existing type will be returned.</td>
</tr>
<tr>
    <td><a href="#create_hit_with_hit_type"><CopyableCode code="create_hit_with_hit_type" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-HITTypeId"><code>HITTypeId</code></a>, <a href="#parameter-LifetimeInSeconds"><code>LifetimeInSeconds</code></a></td>
    <td></td>
    <td>The CreateHITWithHITType operation creates a new Human Intelligence Task (HIT) using an existing HITTypeID generated by the CreateHITType operation. This is an alternative way to create HITs from the CreateHIT operation. This is the recommended best practice for Requesters who are creating large numbers of HITs. CreateHITWithHITType also supports several ways to provide question data: by providing a value for the Question parameter that fully specifies the contents of the HIT, or by providing a HitLayoutId and associated HitLayoutParameters. If a HIT is created with 10 or more maximum assignments, there is an additional fee. For more information, see Amazon Mechanical Turk Pricing.</td>
</tr>
<tr>
    <td><a href="#update_expiration_for_hit"><CopyableCode code="update_expiration_for_hit" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-HITId"><code>HITId</code></a>, <a href="#parameter-ExpireAt"><code>ExpireAt</code></a></td>
    <td></td>
    <td>The UpdateExpirationForHIT operation allows you update the expiration time of a HIT. If you update it to a time in the past, the HIT will be immediately expired.</td>
</tr>
<tr>
    <td><a href="#update_hit_type_of_hit"><CopyableCode code="update_hit_type_of_hit" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-HITId"><code>HITId</code></a>, <a href="#parameter-HITTypeId"><code>HITTypeId</code></a></td>
    <td></td>
    <td>The UpdateHITTypeOfHIT operation allows you to change the HITType properties of a HIT. This operation disassociates the HIT from its old HITType properties and associates it with the new HITType properties. The HIT takes on the properties of the new HITType in place of the old ones.</td>
</tr>
<tr>
    <td><a href="#update_hit_review_status"><CopyableCode code="update_hit_review_status" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-HITId"><code>HITId</code></a></td>
    <td></td>
    <td>The UpdateHITReviewStatus operation updates the status of a HIT. If the status is Reviewable, this operation can update the status to Reviewing, or it can revert a Reviewing HIT back to the Reviewable status.</td>
</tr>
<tr>
    <td><a href="#delete_hit"><CopyableCode code="delete_hit" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The DeleteHIT operation is used to delete HIT that is no longer needed. Only the Requester who created the HIT can delete it. You can only dispose of HITs that are in the Reviewable state, with all of their submitted assignments already either approved or rejected. If you call the DeleteHIT operation on a HIT that is not in the Reviewable state (for example, that has not expired, or still has active assignments), or on a HIT that is Reviewable but without all of its submitted assignments already approved or rejected, the service will return an error. HITs are automatically disposed of after 120 days. After you dispose of a HIT, you can no longer approve the HIT's rejected assignments. Disposed HITs are not returned in results for the ListHITs operation. Disposing HITs can improve the performance of operations such as ListReviewableHITs and ListHITs.</td>
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
    defaultValue="get_hit"
    values={[
        { label: 'get_hit', value: 'get_hit' }
    ]}
>
<TabItem value="get_hit">

The GetHIT operation retrieves the details of the specified HIT.

```sql
SELECT
AssignmentDurationInSeconds,
AutoApprovalDelayInSeconds,
CreationTime,
Description,
Expiration,
HITGroupId,
HITId,
HITLayoutId,
HITReviewStatus,
HITStatus,
HITTypeId,
Keywords,
MaxAssignments,
NumberOfAssignmentsAvailable,
NumberOfAssignmentsCompleted,
NumberOfAssignmentsPending,
QualificationRequirements,
Question,
RequesterAnnotation,
Reward,
Title
FROM aws.mturk.hits
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_hit"
    values={[
        { label: 'create_hit', value: 'create_hit' },
        { label: 'create_hit_type', value: 'create_hit_type' },
        { label: 'create_hit_with_hit_type', value: 'create_hit_with_hit_type' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_hit">

The CreateHIT operation creates a new Human Intelligence Task (HIT). The new HIT is made available for Workers to find and accept on the Amazon Mechanical Turk website. This operation allows you to specify a new HIT by passing in values for the properties of the HIT, such as its title, reward amount and number of assignments. When you pass these values to CreateHIT, a new HIT is created for you, with a new HITTypeID. The HITTypeID can be used to create additional HITs in the future without needing to specify common parameters such as the title, description and reward amount each time. An alternative way to create HITs is to first generate a HITTypeID using the CreateHITType operation and then call the CreateHITWithHITType operation. This is the recommended best practice for Requesters who are creating large numbers of HITs. CreateHIT also supports several ways to provide question data: by providing a value for the Question parameter that fully specifies the contents of the HIT, or by providing a HitLayoutId and associated HitLayoutParameters. If a HIT is created with 10 or more maximum assignments, there is an additional fee. For more information, see Amazon Mechanical Turk Pricing.

```sql
INSERT INTO aws.mturk.hits (
MaxAssignments,
AutoApprovalDelayInSeconds,
LifetimeInSeconds,
AssignmentDurationInSeconds,
Reward,
Title,
Keywords,
Description,
Question,
RequesterAnnotation,
QualificationRequirements,
UniqueRequestToken,
AssignmentReviewPolicy,
HITReviewPolicy,
HITLayoutId,
HITLayoutParameters,
region
)
SELECT 
{{ MaxAssignments }},
{{ AutoApprovalDelayInSeconds }},
{{ LifetimeInSeconds }} /* required */,
{{ AssignmentDurationInSeconds }} /* required */,
'{{ Reward }}' /* required */,
'{{ Title }}' /* required */,
'{{ Keywords }}',
'{{ Description }}' /* required */,
'{{ Question }}',
'{{ RequesterAnnotation }}',
'{{ QualificationRequirements }}',
'{{ UniqueRequestToken }}',
'{{ AssignmentReviewPolicy }}',
'{{ HITReviewPolicy }}',
'{{ HITLayoutId }}',
'{{ HITLayoutParameters }}',
'{{ region }}'
RETURNING
HIT
;
```
</TabItem>
<TabItem value="create_hit_type">

The CreateHITType operation creates a new HIT type. This operation allows you to define a standard set of HIT properties to use when creating HITs. If you register a HIT type with values that match an existing HIT type, the HIT type ID of the existing type will be returned.

```sql
INSERT INTO aws.mturk.hits (
AutoApprovalDelayInSeconds,
AssignmentDurationInSeconds,
Reward,
Title,
Keywords,
Description,
QualificationRequirements,
region
)
SELECT 
{{ AutoApprovalDelayInSeconds }},
{{ AssignmentDurationInSeconds }} /* required */,
'{{ Reward }}' /* required */,
'{{ Title }}' /* required */,
'{{ Keywords }}',
'{{ Description }}' /* required */,
'{{ QualificationRequirements }}',
'{{ region }}'
RETURNING
HITTypeId
;
```
</TabItem>
<TabItem value="create_hit_with_hit_type">

The CreateHITWithHITType operation creates a new Human Intelligence Task (HIT) using an existing HITTypeID generated by the CreateHITType operation. This is an alternative way to create HITs from the CreateHIT operation. This is the recommended best practice for Requesters who are creating large numbers of HITs. CreateHITWithHITType also supports several ways to provide question data: by providing a value for the Question parameter that fully specifies the contents of the HIT, or by providing a HitLayoutId and associated HitLayoutParameters. If a HIT is created with 10 or more maximum assignments, there is an additional fee. For more information, see Amazon Mechanical Turk Pricing.

```sql
INSERT INTO aws.mturk.hits (
HITTypeId,
MaxAssignments,
LifetimeInSeconds,
Question,
RequesterAnnotation,
UniqueRequestToken,
AssignmentReviewPolicy,
HITReviewPolicy,
HITLayoutId,
HITLayoutParameters,
region
)
SELECT 
'{{ HITTypeId }}' /* required */,
{{ MaxAssignments }},
{{ LifetimeInSeconds }} /* required */,
'{{ Question }}',
'{{ RequesterAnnotation }}',
'{{ UniqueRequestToken }}',
'{{ AssignmentReviewPolicy }}',
'{{ HITReviewPolicy }}',
'{{ HITLayoutId }}',
'{{ HITLayoutParameters }}',
'{{ region }}'
RETURNING
HIT
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: hits
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the hits resource.
    - name: MaxAssignments
      value: {{ MaxAssignments }}
      description: |
        The number of times the HIT can be accepted and completed before the HIT becomes unavailable.
    - name: AutoApprovalDelayInSeconds
      value: {{ AutoApprovalDelayInSeconds }}
      description: |
        The number of seconds after an assignment for the HIT has been submitted, after which the assignment is considered Approved automatically unless the Requester explicitly rejects it.
    - name: LifetimeInSeconds
      value: {{ LifetimeInSeconds }}
      description: |
        An amount of time, in seconds, after which the HIT is no longer available for users to accept. After the lifetime of the HIT elapses, the HIT no longer appears in HIT searches, even if not all of the assignments for the HIT have been accepted.
    - name: AssignmentDurationInSeconds
      value: {{ AssignmentDurationInSeconds }}
      description: |
        The amount of time, in seconds, that a Worker has to complete the HIT after accepting it. If a Worker does not complete the assignment within the specified duration, the assignment is considered abandoned. If the HIT is still active (that is, its lifetime has not elapsed), the assignment becomes available for other users to find and accept.
    - name: Reward
      value: "{{ Reward }}"
      description: |
        A string representing a currency amount.
    - name: Title
      value: "{{ Title }}"
      description: |
        The title of the HIT. A title should be short and descriptive about the kind of task the HIT contains. On the Amazon Mechanical Turk web site, the HIT title appears in search results, and everywhere the HIT is mentioned.
    - name: Keywords
      value: "{{ Keywords }}"
      description: |
        One or more words or phrases that describe the HIT, separated by commas. These words are used in searches to find HITs.
    - name: Description
      value: "{{ Description }}"
      description: |
        A general description of the HIT. A description includes detailed information about the kind of task the HIT contains. On the Amazon Mechanical Turk web site, the HIT description appears in the expanded view of search results, and in the HIT and assignment screens. A good description gives the user enough information to evaluate the HIT before accepting it.
    - name: Question
      value: "{{ Question }}"
      description: |
        The data the person completing the HIT uses to produce the results. Constraints: Must be a QuestionForm data structure, an ExternalQuestion data structure, or an HTMLQuestion data structure. The XML question data must not be larger than 64 kilobytes (65,535 bytes) in size, including whitespace. Either a Question parameter or a HITLayoutId parameter must be provided.
    - name: RequesterAnnotation
      value: "{{ RequesterAnnotation }}"
      description: |
        An arbitrary data field. The RequesterAnnotation parameter lets your application attach arbitrary data to the HIT for tracking purposes. For example, this parameter could be an identifier internal to the Requester's application that corresponds with the HIT. The RequesterAnnotation parameter for a HIT is only visible to the Requester who created the HIT. It is not shown to the Worker, or any other Requester. The RequesterAnnotation parameter may be different for each HIT you submit. It does not affect how your HITs are grouped.
    - name: QualificationRequirements
      description: |
        Conditions that a Worker's Qualifications must meet in order to accept the HIT. A HIT can have between zero and ten Qualification requirements. All requirements must be met in order for a Worker to accept the HIT. Additionally, other actions can be restricted using the ActionsGuarded field on each QualificationRequirement structure.
      value:
        - QualificationTypeId: "{{ QualificationTypeId }}"
          Comparator: "{{ Comparator }}"
          IntegerValues: "{{ IntegerValues }}"
          LocaleValues: "{{ LocaleValues }}"
          RequiredToPreview: {{ RequiredToPreview }}
          ActionsGuarded: "{{ ActionsGuarded }}"
    - name: UniqueRequestToken
      value: "{{ UniqueRequestToken }}"
      description: |
        A unique identifier for this request which allows you to retry the call on error without creating duplicate HITs. This is useful in cases such as network timeouts where it is unclear whether or not the call succeeded on the server. If the HIT already exists in the system from a previous call using the same UniqueRequestToken, subsequent calls will return a AWS.MechanicalTurk.HitAlreadyExists error with a message containing the HITId. Note: It is your responsibility to ensure uniqueness of the token. The unique token expires after 24 hours. Subsequent calls using the same UniqueRequestToken made after the 24 hour limit could create duplicate HITs.
    - name: AssignmentReviewPolicy
      description: |
        The Assignment-level Review Policy applies to the assignments under the HIT. You can specify for Mechanical Turk to take various actions based on the policy.
      value:
        PolicyName: "{{ PolicyName }}"
        Parameters:
          - Key: "{{ Key }}"
            Values: "{{ Values }}"
            MapEntries: "{{ MapEntries }}"
    - name: HITReviewPolicy
      description: |
        The HIT-level Review Policy applies to the HIT. You can specify for Mechanical Turk to take various actions based on the policy.
      value:
        PolicyName: "{{ PolicyName }}"
        Parameters:
          - Key: "{{ Key }}"
            Values: "{{ Values }}"
            MapEntries: "{{ MapEntries }}"
    - name: HITLayoutId
      value: "{{ HITLayoutId }}"
      description: |
        The HITLayoutId allows you to use a pre-existing HIT design with placeholder values and create an additional HIT by providing those values as HITLayoutParameters. Constraints: Either a Question parameter or a HITLayoutId parameter must be provided.
    - name: HITLayoutParameters
      description: |
        If the HITLayoutId is provided, any placeholder values must be filled in with values using the HITLayoutParameter structure. For more information, see HITLayout.
      value:
        - Name: "{{ Name }}"
          Value: "{{ Value }}"
    - name: HITTypeId
      value: "{{ HITTypeId }}"
      description: |
        The HIT type ID you want to create this HIT with.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_expiration_for_hit"
    values={[
        { label: 'update_expiration_for_hit', value: 'update_expiration_for_hit' },
        { label: 'update_hit_type_of_hit', value: 'update_hit_type_of_hit' },
        { label: 'update_hit_review_status', value: 'update_hit_review_status' }
    ]}
>
<TabItem value="update_expiration_for_hit">

The UpdateExpirationForHIT operation allows you update the expiration time of a HIT. If you update it to a time in the past, the HIT will be immediately expired.

```sql
UPDATE aws.mturk.hits
SET 
HITId = '{{ HITId }}',
ExpireAt = '{{ ExpireAt }}'
WHERE 
region = '{{ region }}' --required
AND HITId = '{{ HITId }}' --required
AND ExpireAt = '{{ ExpireAt }}' --required;
```
</TabItem>
<TabItem value="update_hit_type_of_hit">

The UpdateHITTypeOfHIT operation allows you to change the HITType properties of a HIT. This operation disassociates the HIT from its old HITType properties and associates it with the new HITType properties. The HIT takes on the properties of the new HITType in place of the old ones.

```sql
UPDATE aws.mturk.hits
SET 
HITId = '{{ HITId }}',
HITTypeId = '{{ HITTypeId }}'
WHERE 
region = '{{ region }}' --required
AND HITId = '{{ HITId }}' --required
AND HITTypeId = '{{ HITTypeId }}' --required;
```
</TabItem>
<TabItem value="update_hit_review_status">

The UpdateHITReviewStatus operation updates the status of a HIT. If the status is Reviewable, this operation can update the status to Reviewing, or it can revert a Reviewing HIT back to the Reviewable status.

```sql
UPDATE aws.mturk.hits
SET 
HITId = '{{ HITId }}',
Revert = {{ Revert }}
WHERE 
region = '{{ region }}' --required
AND HITId = '{{ HITId }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_hit"
    values={[
        { label: 'delete_hit', value: 'delete_hit' }
    ]}
>
<TabItem value="delete_hit">

The DeleteHIT operation is used to delete HIT that is no longer needed. Only the Requester who created the HIT can delete it. You can only dispose of HITs that are in the Reviewable state, with all of their submitted assignments already either approved or rejected. If you call the DeleteHIT operation on a HIT that is not in the Reviewable state (for example, that has not expired, or still has active assignments), or on a HIT that is Reviewable but without all of its submitted assignments already approved or rejected, the service will return an error. HITs are automatically disposed of after 120 days. After you dispose of a HIT, you can no longer approve the HIT's rejected assignments. Disposed HITs are not returned in results for the ListHITs operation. Disposing HITs can improve the performance of operations such as ListReviewableHITs and ListHITs.

```sql
DELETE FROM aws.mturk.hits
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
