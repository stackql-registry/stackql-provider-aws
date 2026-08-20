--- 
title: compliance_inquiries
hide_title: false
hide_table_of_contents: false
keywords:
  - compliance_inquiries
  - artifact
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

Creates, updates, deletes, gets or lists a <code>compliance_inquiries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="compliance_inquiries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.artifact.compliance_inquiries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_compliance_inquiries"
    values={[
        { label: 'list_compliance_inquiries', value: 'list_compliance_inquiries' }
    ]}
>
<TabItem value="list_compliance_inquiries">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Unique resource ID for the compliance inquiry. (pattern: &lt;code&gt;compliance-inquiry-&#91;a-zA-Z0-9&#93;&#123;16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Title of the inquiry.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>ARN of the compliance inquiry resource.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp indicating when the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="input_source" /></td>
    <td><code>string</code></td>
    <td>Type of inquiry content (text or file). (TEXT, FILE)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Current processing status of the inquiry. (PROCESSING, HUMAN_REVIEW, COMPLETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>Status message providing additional context. (Compliance inquiry processing is complete., Malware was detected on the file. Provide a new file and try again., Compliance inquiry processing is in-progress., An internal error occurred while processing the inquiry. Try again at a later time., Human review is in progress., Compliance inquiry processing is complete. One or more queries encountered errors during processing.)</td>
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
    <td><a href="#list_compliance_inquiries"><CopyableCode code="list_compliance_inquiries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>List available compliance inquiries.</td>
</tr>
<tr>
    <td><a href="#create_compliance_inquiry"><CopyableCode code="create_compliance_inquiry" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-inquiryContent"><code>inquiryContent</code></a></td>
    <td></td>
    <td>Create a new compliance inquiry.</td>
</tr>
<tr>
    <td><a href="#put_compliance_inquiry_feedback"><CopyableCode code="put_compliance_inquiry_feedback" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-complianceInquiryId"><code>complianceInquiryId</code></a>, <a href="#parameter-rating"><code>rating</code></a></td>
    <td></td>
    <td>Submits feedback on a compliance inquiry response.</td>
</tr>
<tr>
    <td><a href="#export_compliance_inquiry"><CopyableCode code="export_compliance_inquiry" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-complianceInquiryId"><code>complianceInquiryId</code></a></td>
    <td></td>
    <td>Export a compliance inquiry report.</td>
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
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of resources to return in the paginated response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Pagination token to request the next page of resources.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_compliance_inquiries"
    values={[
        { label: 'list_compliance_inquiries', value: 'list_compliance_inquiries' }
    ]}
>
<TabItem value="list_compliance_inquiries">

List available compliance inquiries.

```sql
SELECT
id,
name,
arn,
created_at,
input_source,
status,
status_message
FROM aws.artifact.compliance_inquiries
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_compliance_inquiry"
    values={[
        { label: 'create_compliance_inquiry', value: 'create_compliance_inquiry' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_compliance_inquiry">

Create a new compliance inquiry.

```sql
INSERT INTO aws.artifact.compliance_inquiries (
name,
inquiryContent,
clientToken,
supportMode,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ inquiryContent }}' /* required */,
'{{ clientToken }}',
'{{ supportMode }}',
'{{ tags }}',
'{{ region }}'
RETURNING
compliance_inquiry_summary,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: compliance_inquiries
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the compliance_inquiries resource.
    - name: name
      value: "{{ name }}"
    - name: inquiryContent
      description: |
        Content for creating a compliance inquiry - either a single query or file content.
      value:
        query: "{{ query }}"
        fileContent:
          fileSections:
            - "{{ fileSections }}"
          content: "{{ content }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: supportMode
      value: "{{ supportMode }}"
      valid_values: ['AI_ONLY', 'FULL_SUPPORT']
    - name: tags
      value: "{{ tags }}"
      description: |
        A map of tag keys to tag values.
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_compliance_inquiry_feedback"
    values={[
        { label: 'put_compliance_inquiry_feedback', value: 'put_compliance_inquiry_feedback' }
    ]}
>
<TabItem value="put_compliance_inquiry_feedback">

Submits feedback on a compliance inquiry response.

```sql
REPLACE aws.artifact.compliance_inquiries
SET 
complianceInquiryId = '{{ complianceInquiryId }}',
queryIdentifier = {{ queryIdentifier }},
rating = '{{ rating }}',
responseRevisionId = {{ responseRevisionId }},
reasonCodes = '{{ reasonCodes }}',
comment = '{{ comment }}',
clientToken = '{{ clientToken }}'
WHERE 
region = '{{ region }}' --required
AND complianceInquiryId = '{{ complianceInquiryId }}' --required
AND rating = '{{ rating }}' --required
RETURNING
submitted_at;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="export_compliance_inquiry"
    values={[
        { label: 'export_compliance_inquiry', value: 'export_compliance_inquiry' }
    ]}
>
<TabItem value="export_compliance_inquiry">

Export a compliance inquiry report.

```sql
EXEC aws.artifact.compliance_inquiries.export_compliance_inquiry 
@region='{{ region }}' --required 
@@json=
'{
"complianceInquiryId": "{{ complianceInquiryId }}", 
"queryIdentifiers": "{{ queryIdentifiers }}", 
"includeCitations": {{ includeCitations }}
}'
;
```
</TabItem>
</Tabs>
