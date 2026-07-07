--- 
title: faqs
hide_title: false
hide_table_of_contents: false
keywords:
  - faqs
  - kendra
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

Creates, updates, deletes, gets or lists a <code>faqs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="faqs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kendra.faqs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_faq"
    values={[
        { label: 'describe_faq', value: 'describe_faq' }
    ]}
>
<TabItem value="describe_faq">

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
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp when the FAQ was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the FAQ that you provided when it was created. (pattern: &lt;code&gt;^\P&#123;C&#125;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ErrorMessage" /></td>
    <td><code>string</code></td>
    <td>If the Status field is FAILED, the ErrorMessage field contains the reason why the FAQ failed. (pattern: &lt;code&gt;^\P&#123;C&#125;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FileFormat" /></td>
    <td><code>string</code></td>
    <td>The file format used for the FAQ file. (CSV, CSV_WITH_HEADER, JSON)</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the FAQ. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="IndexId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the index for the FAQ. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LanguageCode" /></td>
    <td><code>string</code></td>
    <td>The code for a language. This shows a supported language for the FAQ document. English is supported by default. For more information on supported languages, including their codes, see Adding documents in languages other than English. (pattern: &lt;code&gt;&#91;a-zA-Z-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name that you gave the FAQ when it was created. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role that provides access to the S3 bucket containing the FAQ file. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="S3Path" /></td>
    <td><code>object</code></td>
    <td>Information required to find a specific file in an Amazon S3 bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the FAQ. It is ready to use when the status is ACTIVE. (CREATING, UPDATING, ACTIVE, DELETING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp when the FAQ was last updated.</td>
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
    <td><a href="#describe_faq"><CopyableCode code="describe_faq" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a FAQ.</td>
</tr>
<tr>
    <td><a href="#create_faq"><CopyableCode code="create_faq" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IndexId"><code>IndexId</code></a>, <a href="#parameter-S3Path"><code>S3Path</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a></td>
    <td></td>
    <td>Creates a set of frequently ask questions (FAQs) using a specified FAQ file stored in an Amazon S3 bucket. Adding FAQs to an index is an asynchronous operation. For an example of adding an FAQ to an index using Python and Java SDKs, see Using your FAQ file.</td>
</tr>
<tr>
    <td><a href="#delete_faq"><CopyableCode code="delete_faq" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes a FAQ from an index.</td>
</tr>
<tr>
    <td><a href="#list_faqs"><CopyableCode code="list_faqs" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IndexId"><code>IndexId</code></a></td>
    <td></td>
    <td>Gets a list of FAQs associated with an index.</td>
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
    defaultValue="describe_faq"
    values={[
        { label: 'describe_faq', value: 'describe_faq' }
    ]}
>
<TabItem value="describe_faq">

Gets information about a FAQ.

```sql
SELECT
CreatedAt,
Description,
ErrorMessage,
FileFormat,
Id,
IndexId,
LanguageCode,
Name,
RoleArn,
S3Path,
Status,
UpdatedAt
FROM aws.kendra.faqs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_faq"
    values={[
        { label: 'create_faq', value: 'create_faq' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_faq">

Creates a set of frequently ask questions (FAQs) using a specified FAQ file stored in an Amazon S3 bucket. Adding FAQs to an index is an asynchronous operation. For an example of adding an FAQ to an index using Python and Java SDKs, see Using your FAQ file.

```sql
INSERT INTO aws.kendra.faqs (
IndexId,
Name,
Description,
S3Path,
RoleArn,
Tags,
FileFormat,
ClientToken,
LanguageCode,
region
)
SELECT 
'{{ IndexId }}' /* required */,
'{{ Name }}',
'{{ Description }}',
'{{ S3Path }}' /* required */,
'{{ RoleArn }}' /* required */,
'{{ Tags }}',
'{{ FileFormat }}',
'{{ ClientToken }}',
'{{ LanguageCode }}',
'{{ region }}'
RETURNING
Id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: faqs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the faqs resource.
    - name: IndexId
      value: "{{ IndexId }}"
      description: |
        The identifier of the index for the FAQ.
    - name: Name
      value: "{{ Name }}"
      description: |
        A name for the FAQ.
    - name: Description
      value: "{{ Description }}"
      description: |
        A description for the FAQ.
    - name: S3Path
      description: |
        Information required to find a specific file in an Amazon S3 bucket.
      value:
        Bucket: "{{ Bucket }}"
        Key: "{{ Key }}"
    - name: RoleArn
      value: "{{ RoleArn }}"
      description: |
        The Amazon Resource Name (ARN) of an IAM role with permission to access the S3 bucket that contains the FAQ file. For more information, see IAM access roles for Amazon Kendra.
    - name: Tags
      description: |
        A list of key-value pairs that identify the FAQ. You can use the tags to identify and organize your resources and to control access to resources.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: FileFormat
      value: "{{ FileFormat }}"
      description: |
        The format of the FAQ input file. You can choose between a basic CSV format, a CSV format that includes customs attributes in a header, and a JSON format that includes custom attributes. The default format is CSV. The format must match the format of the file stored in the S3 bucket identified in the S3Path parameter. For more information, see Adding questions and answers.
      valid_values: ['CSV', 'CSV_WITH_HEADER', 'JSON']
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        A token that you provide to identify the request to create a FAQ. Multiple calls to the CreateFaqRequest API with the same client token will create only one FAQ.
    - name: LanguageCode
      value: "{{ LanguageCode }}"
      description: |
        The code for a language. This allows you to support a language for the FAQ document. English is supported by default. For more information on supported languages, including their codes, see Adding documents in languages other than English.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_faq"
    values={[
        { label: 'delete_faq', value: 'delete_faq' }
    ]}
>
<TabItem value="delete_faq">

Removes a FAQ from an index.

```sql
DELETE FROM aws.kendra.faqs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_faqs"
    values={[
        { label: 'list_faqs', value: 'list_faqs' }
    ]}
>
<TabItem value="list_faqs">

Gets a list of FAQs associated with an index.

```sql
EXEC aws.kendra.faqs.list_faqs 
@region='{{ region }}' --required 
@@json=
'{
"IndexId": "{{ IndexId }}", 
"NextToken": "{{ NextToken }}", 
"MaxResults": {{ MaxResults }}
}'
;
```
</TabItem>
</Tabs>
