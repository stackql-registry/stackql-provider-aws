--- 
title: communications
hide_title: false
hide_table_of_contents: false
keywords:
  - communications
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

Creates, updates, deletes, gets or lists a <code>communications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="communications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.support.communications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_communications"
    values={[
        { label: 'describe_communications', value: 'describe_communications' }
    ]}
>
<TabItem value="describe_communications">

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
    <td><CopyableCode code="attachment_set" /></td>
    <td><code>array</code></td>
    <td>Information about the attachments to the case communication that are 5 MB or smaller. This field doesn't include attachments larger than 5 MB. To enumerate every attachment on the communication, including attachments larger than 5 MB, use the attachments field instead.</td>
</tr>
<tr>
    <td><CopyableCode code="attachments" /></td>
    <td><code>array</code></td>
    <td>Information about all attachments on the case communication. This includes attachments added through AddAttachmentsToSet and attachments uploaded through GetAttachmentUploadLinks. Use this field to enumerate every attachment on the communication. To download an attachment listed in this field, use GetAttachmentDownloadLink. GetAttachmentDownloadLink returns a presigned URL that works for attachments of any size.</td>
</tr>
<tr>
    <td><CopyableCode code="body" /></td>
    <td><code>string</code></td>
    <td>The text of the communication between the customer and Amazon Web Services Support.</td>
</tr>
<tr>
    <td><CopyableCode code="case_id" /></td>
    <td><code>string</code></td>
    <td>The support case ID requested or returned in the call. The case ID is an alphanumeric string formatted as shown in this example: case-12345678910-exen-2025-c4c1d2bf33c5cf47</td>
</tr>
<tr>
    <td><CopyableCode code="submitted_by" /></td>
    <td><code>string</code></td>
    <td>The identity of the account that submitted, or responded to, the support case. Customer entries include the IAM role as well as the email address (for example, "AdminRole (Role) &lt;janedoe@example.com&gt;). Entries from the Amazon Web Services Support team display "Amazon Web Services," and don't show an email address.</td>
</tr>
<tr>
    <td><CopyableCode code="time_created" /></td>
    <td><code>string</code></td>
    <td>The time the communication was created.</td>
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
    <td><a href="#describe_communications"><CopyableCode code="describe_communications" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns communications and attachments for one or more support cases. Use the afterTime and beforeTime parameters to filter by date. You can use the caseId parameter to restrict the results to a specific case. Case data is available for 24 months after creation. If a case was created more than 24 months ago, a request for data might cause an error. You can use the maxResults and nextToken parameters to control the pagination of the results. Set maxResults to the number of cases that you want to display on each page, and use nextToken to specify the resumption of pagination. You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan. If you call the Amazon Web Services Support API from an account that doesn't have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support. Each Communication returned by this operation includes attachment information in two fields: attachmentSet: returns only attachments that are 5 MB or smaller. Attachments larger than 5 MB are not included in this field. attachments: returns all attachments regardless of size. Amazon Web Services recommends that you use the attachments field and download each attachment with GetAttachmentDownloadLink, which supports attachments of any size. The attachmentSet field and DescribeAttachment return only attachments that are 5 MB or smaller.</td>
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
    defaultValue="describe_communications"
    values={[
        { label: 'describe_communications', value: 'describe_communications' }
    ]}
>
<TabItem value="describe_communications">

Returns communications and attachments for one or more support cases. Use the afterTime and beforeTime parameters to filter by date. You can use the caseId parameter to restrict the results to a specific case. Case data is available for 24 months after creation. If a case was created more than 24 months ago, a request for data might cause an error. You can use the maxResults and nextToken parameters to control the pagination of the results. Set maxResults to the number of cases that you want to display on each page, and use nextToken to specify the resumption of pagination. You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan. If you call the Amazon Web Services Support API from an account that doesn't have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support. Each Communication returned by this operation includes attachment information in two fields: attachmentSet: returns only attachments that are 5 MB or smaller. Attachments larger than 5 MB are not included in this field. attachments: returns all attachments regardless of size. Amazon Web Services recommends that you use the attachments field and download each attachment with GetAttachmentDownloadLink, which supports attachments of any size. The attachmentSet field and DescribeAttachment return only attachments that are 5 MB or smaller.

```sql
SELECT
attachment_set,
attachments,
body,
case_id,
submitted_by,
time_created
FROM aws.support.communications
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
