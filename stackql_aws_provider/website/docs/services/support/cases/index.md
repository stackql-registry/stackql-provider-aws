--- 
title: cases
hide_title: false
hide_table_of_contents: false
keywords:
  - cases
  - support
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

Creates, updates, deletes, gets or lists a <code>cases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.support.cases" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_cases"
    values={[
        { label: 'describe_cases', value: 'describe_cases' }
    ]}
>
<TabItem value="describe_cases">

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
    <td><CopyableCode code="case_id" /></td>
    <td><code>string</code></td>
    <td>The support case ID requested or returned in the call. The case ID is an alphanumeric string formatted as shown in this example: case-12345678910-exen-2025-c4c1d2bf33c5cf47</td>
</tr>
<tr>
    <td><CopyableCode code="category_code" /></td>
    <td><code>string</code></td>
    <td>The category of problem for the support case.</td>
</tr>
<tr>
    <td><CopyableCode code="cc_email_addresses" /></td>
    <td><code>array</code></td>
    <td>The email addresses that receive copies of communication about the case.</td>
</tr>
<tr>
    <td><CopyableCode code="display_id" /></td>
    <td><code>string</code></td>
    <td>The ID displayed for the case in the Amazon Web Services Support Center. This is a numeric string.</td>
</tr>
<tr>
    <td><CopyableCode code="language" /></td>
    <td><code>string</code></td>
    <td>The language in which Amazon Web Services Support handles the case. Amazon Web Services Support currently supports Chinese (“zh”), English ("en"), Japanese ("ja") , Chinese ("zh"), Spanish ("es"), Portuguese ("pt"), French ("fr"), Korean (“ko”), and Turkish ("tr"). You must specify the ISO 639-1 code for the language parameter if you want support in that language.</td>
</tr>
<tr>
    <td><CopyableCode code="recent_communications" /></td>
    <td><code>object</code></td>
    <td>The five most recent communications between you and Amazon Web Services Support Center, including the IDs of any attachments to the communications. Also includes a nextToken that you can use to retrieve earlier communications.</td>
</tr>
<tr>
    <td><CopyableCode code="service_code" /></td>
    <td><code>string</code></td>
    <td>The code for the Amazon Web Services service. You can get a list of codes and the corresponding service names by calling DescribeServices.</td>
</tr>
<tr>
    <td><CopyableCode code="severity_code" /></td>
    <td><code>string</code></td>
    <td>The code for the severity level returned by the call to DescribeSeverityLevels.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the case. Valid values: all-open customer-action-completed opened pending-customer-action reopened resolved unassigned work-in-progress</td>
</tr>
<tr>
    <td><CopyableCode code="subject" /></td>
    <td><code>string</code></td>
    <td>The subject line for the case in the Amazon Web Services Support Center.</td>
</tr>
<tr>
    <td><CopyableCode code="submitted_by" /></td>
    <td><code>string</code></td>
    <td>The email address of the account that submitted the case.</td>
</tr>
<tr>
    <td><CopyableCode code="time_created" /></td>
    <td><code>string</code></td>
    <td>The time that the case was created in the Amazon Web Services Support Center.</td>
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
    <td><a href="#describe_cases"><CopyableCode code="describe_cases" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of cases that you specify by passing one or more case IDs. You can use the afterTime and beforeTime parameters to filter the cases by date. You can set values for the includeResolvedCases and includeCommunications parameters to specify how much information to return. The response returns the following in JSON format: One or more CaseDetails data types. One or more nextToken values, which specify where to paginate the returned records represented by the CaseDetails objects. Case data is available for 24 months after creation. If a case was created more than 24 months ago, a request might return an error. You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan. If you call the Amazon Web Services Support API from an account that doesn't have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support. Each Communication returned by this operation includes attachment information in two fields: attachmentSet: returns only attachments that are 5 MB or smaller. Attachments larger than 5 MB are not included in this field. attachments: returns all attachments regardless of size. Amazon Web Services recommends that you use the attachments field and download each attachment with GetAttachmentDownloadLink, which supports attachments of any size. The attachmentSet field and DescribeAttachment return only attachments that are 5 MB or smaller.</td>
</tr>
<tr>
    <td><a href="#create_case"><CopyableCode code="create_case" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-subject"><code>subject</code></a>, <a href="#parameter-communicationBody"><code>communicationBody</code></a></td>
    <td></td>
    <td>Creates a case in the Amazon Web Services Support Center. This operation is similar to how you create a case in the Amazon Web Services Support Center Create Case page. The Amazon Web Services Support API doesn't support requesting service limit increases. You can submit a service limit increase in the following ways: Submit a request from the Amazon Web Services Support Center Create Case page. Use the Service Quotas RequestServiceQuotaIncrease operation. Amazon Web Services Support automatically redacts sensitive information from support cases to protect your data. The following information is replaced with &#91;REDACTED_BY_Amazon Web Services&#93; and is not stored: Amazon Web Services secret keys - The complete key is replaced. Example: &#91;REDACTED_BY_Amazon Web Services&#93; Private keys - The complete key is replaced. Example: &#91;REDACTED_BY_Amazon Web Services&#93; Credit card numbers - The number is redacted, but the last 4 digits remain. Example: &#91;REDACTED_BY_Amazon Web Services&#93;-7016 This sensitive information is never required by Amazon Web Services Support. A successful CreateCase request returns a Amazon Web Services Support case number. You can use the DescribeCases operation and specify the case number to get existing Amazon Web Services Support cases. After you create a case, use the AddCommunicationToCase operation to add additional communication or attachments to an existing case. The caseId is separate from the displayId that appears in the Amazon Web Services Support Center. Use the DescribeCases operation to get the displayId. You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan. If you call the Amazon Web Services Support API from an account that doesn't have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.</td>
</tr>
<tr>
    <td><a href="#add_communication_to_case"><CopyableCode code="add_communication_to_case" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-communicationBody"><code>communicationBody</code></a></td>
    <td></td>
    <td>Adds additional customer communication to a Amazon Web Services Support case. Use the caseId parameter to identify the case to which to add communication. To list a set of email addresses to copy on the communication, use the ccEmailAddresses parameter. The communicationBody value contains the text of the communication. To attach files larger than 5 MB to the communication, use the uploadIds parameter. Amazon Web Services Support automatically redacts sensitive information from support cases to protect your data. The following information is replaced with &#91;REDACTED_BY_Amazon Web Services&#93; and is not stored: Amazon Web Services secret keys - The complete key is replaced. Example: &#91;REDACTED_BY_Amazon Web Services&#93; Private keys - The complete key is replaced. Example: &#91;REDACTED_BY_Amazon Web Services&#93; Credit card numbers - The number is redacted, but the last 4 digits remain. Example: &#91;REDACTED_BY_Amazon Web Services&#93;-7016 This sensitive information is never required by Amazon Web Services Support. You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan. If you call the Amazon Web Services Support API from an account that doesn't have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.</td>
</tr>
<tr>
    <td><a href="#resolve_case"><CopyableCode code="resolve_case" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Resolves a support case. This operation takes a caseId and returns the initial and final state of the case. You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan. If you call the Amazon Web Services Support API from an account that doesn't have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.</td>
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
    defaultValue="describe_cases"
    values={[
        { label: 'describe_cases', value: 'describe_cases' }
    ]}
>
<TabItem value="describe_cases">

Returns a list of cases that you specify by passing one or more case IDs. You can use the afterTime and beforeTime parameters to filter the cases by date. You can set values for the includeResolvedCases and includeCommunications parameters to specify how much information to return. The response returns the following in JSON format: One or more CaseDetails data types. One or more nextToken values, which specify where to paginate the returned records represented by the CaseDetails objects. Case data is available for 24 months after creation. If a case was created more than 24 months ago, a request might return an error. You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan. If you call the Amazon Web Services Support API from an account that doesn't have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support. Each Communication returned by this operation includes attachment information in two fields: attachmentSet: returns only attachments that are 5 MB or smaller. Attachments larger than 5 MB are not included in this field. attachments: returns all attachments regardless of size. Amazon Web Services recommends that you use the attachments field and download each attachment with GetAttachmentDownloadLink, which supports attachments of any size. The attachmentSet field and DescribeAttachment return only attachments that are 5 MB or smaller.

```sql
SELECT
case_id,
category_code,
cc_email_addresses,
display_id,
language,
recent_communications,
service_code,
severity_code,
status,
subject,
submitted_by,
time_created
FROM aws.support.cases
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_case"
    values={[
        { label: 'create_case', value: 'create_case' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_case">

Creates a case in the Amazon Web Services Support Center. This operation is similar to how you create a case in the Amazon Web Services Support Center Create Case page. The Amazon Web Services Support API doesn't support requesting service limit increases. You can submit a service limit increase in the following ways: Submit a request from the Amazon Web Services Support Center Create Case page. Use the Service Quotas RequestServiceQuotaIncrease operation. Amazon Web Services Support automatically redacts sensitive information from support cases to protect your data. The following information is replaced with [REDACTED_BY_Amazon Web Services] and is not stored: Amazon Web Services secret keys - The complete key is replaced. Example: [REDACTED_BY_Amazon Web Services] Private keys - The complete key is replaced. Example: [REDACTED_BY_Amazon Web Services] Credit card numbers - The number is redacted, but the last 4 digits remain. Example: [REDACTED_BY_Amazon Web Services]-7016 This sensitive information is never required by Amazon Web Services Support. A successful CreateCase request returns a Amazon Web Services Support case number. You can use the DescribeCases operation and specify the case number to get existing Amazon Web Services Support cases. After you create a case, use the AddCommunicationToCase operation to add additional communication or attachments to an existing case. The caseId is separate from the displayId that appears in the Amazon Web Services Support Center. Use the DescribeCases operation to get the displayId. You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan. If you call the Amazon Web Services Support API from an account that doesn't have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.

```sql
INSERT INTO aws.support.cases (
subject,
serviceCode,
severityCode,
categoryCode,
communicationBody,
ccEmailAddresses,
language,
issueType,
attachmentSetId,
uploadIds,
dryRun,
region
)
SELECT 
'{{ subject }}' /* required */,
'{{ serviceCode }}',
'{{ severityCode }}',
'{{ categoryCode }}',
'{{ communicationBody }}' /* required */,
'{{ ccEmailAddresses }}',
'{{ language }}',
'{{ issueType }}',
'{{ attachmentSetId }}',
'{{ uploadIds }}',
{{ dryRun }},
'{{ region }}'
RETURNING
case_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: cases
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the cases resource.
    - name: subject
      value: "{{ subject }}"
      description: |
        The title of the support case. The title appears in the Subject field on the Amazon Web Services Support Center Create Case page.
    - name: serviceCode
      value: "{{ serviceCode }}"
      description: |
        The code for the Amazon Web Services service. You can use the DescribeServices operation to get the possible serviceCode values.
    - name: severityCode
      value: "{{ severityCode }}"
      description: |
        A value that indicates the urgency of the case. This value determines the response time according to your service level agreement with Amazon Web Services Support. You can use the DescribeSeverityLevels operation to get the possible values for severityCode. For more information, see SeverityLevel and Choosing a Severity in the Amazon Web Services Support User Guide. The availability of severity levels depends on the support plan for the Amazon Web Services account.
    - name: categoryCode
      value: "{{ categoryCode }}"
      description: |
        The category of problem for the support case. You also use the DescribeServices operation to get the category code for a service. Each Amazon Web Services service defines its own set of category codes.
    - name: communicationBody
      value: "{{ communicationBody }}"
      description: |
        The communication body text that describes the issue. This text appears in the Description field on the Amazon Web Services Support Center Create Case page.
    - name: ccEmailAddresses
      value:
        - "{{ ccEmailAddresses }}"
      description: |
        A list of email addresses that Amazon Web Services Support copies on case correspondence. Amazon Web Services Support identifies the account that creates the case when you specify your Amazon Web Services credentials in an HTTP POST method or use the Amazon Web Services SDKs.
    - name: language
      value: "{{ language }}"
      description: |
        The language in which Amazon Web Services Support handles the case. Amazon Web Services Support currently supports Chinese (“zh”), English ("en"), Japanese ("ja") , Chinese ("zh"), Spanish ("es"), Portuguese ("pt"), French ("fr"), Korean (“ko”), and Turkish ("tr"). You must specify the ISO 639-1 code for the language parameter if you want support in that language.
    - name: issueType
      value: "{{ issueType }}"
      description: |
        The type of issue for the case. You can specify customer-service or technical. If you don't specify a value, the default is technical.
    - name: attachmentSetId
      value: "{{ attachmentSetId }}"
      description: |
        The ID of a set of one or more attachments for the case. Create the set by using the AddAttachmentsToSet operation. Each attachment in the set must be 5 MB or smaller. To attach files larger than 5 MB, use uploadIds.
    - name: uploadIds
      value:
        - "{{ uploadIds }}"
      description: |
        A list of upload IDs that identify attachments to add to the case. Each uploadId is returned by the GetAttachmentUploadLinks operation. The upload must reach the attachment-ready state by calling CompleteAttachmentUpload before it can be passed here. Use uploadIds to attach files of any supported size, including files larger than 5 MB.
    - name: dryRun
      value: {{ dryRun }}
      description: |
        Specifies whether to validate the request without actually creating the case. When set to true, the request is validated but no case is created, and the operation returns a DryRunOperationException. When omitted or set to false, the request runs normally.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="add_communication_to_case"
    values={[
        { label: 'add_communication_to_case', value: 'add_communication_to_case' }
    ]}
>
<TabItem value="add_communication_to_case">

Adds additional customer communication to a Amazon Web Services Support case. Use the caseId parameter to identify the case to which to add communication. To list a set of email addresses to copy on the communication, use the ccEmailAddresses parameter. The communicationBody value contains the text of the communication. To attach files larger than 5 MB to the communication, use the uploadIds parameter. Amazon Web Services Support automatically redacts sensitive information from support cases to protect your data. The following information is replaced with [REDACTED_BY_Amazon Web Services] and is not stored: Amazon Web Services secret keys - The complete key is replaced. Example: [REDACTED_BY_Amazon Web Services] Private keys - The complete key is replaced. Example: [REDACTED_BY_Amazon Web Services] Credit card numbers - The number is redacted, but the last 4 digits remain. Example: [REDACTED_BY_Amazon Web Services]-7016 This sensitive information is never required by Amazon Web Services Support. You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan. If you call the Amazon Web Services Support API from an account that doesn't have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.

```sql
UPDATE aws.support.cases
SET 
caseId = '{{ caseId }}',
communicationBody = '{{ communicationBody }}',
ccEmailAddresses = '{{ ccEmailAddresses }}',
attachmentSetId = '{{ attachmentSetId }}',
uploadIds = '{{ uploadIds }}',
dryRun = {{ dryRun }}
WHERE 
region = '{{ region }}' --required
AND communicationBody = '{{ communicationBody }}' --required
RETURNING
result;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="resolve_case"
    values={[
        { label: 'resolve_case', value: 'resolve_case' }
    ]}
>
<TabItem value="resolve_case">

Resolves a support case. This operation takes a caseId and returns the initial and final state of the case. You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan. If you call the Amazon Web Services Support API from an account that doesn't have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.

```sql
EXEC aws.support.cases.resolve_case 
@region='{{ region }}' --required 
@@json=
'{
"caseId": "{{ caseId }}", 
"dryRun": {{ dryRun }}
}'
;
```
</TabItem>
</Tabs>
