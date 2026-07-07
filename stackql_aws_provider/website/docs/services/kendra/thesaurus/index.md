--- 
title: thesaurus
hide_title: false
hide_table_of_contents: false
keywords:
  - thesaurus
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

Creates, updates, deletes, gets or lists a <code>thesaurus</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="thesaurus" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kendra.thesaurus" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_thesaurus"
    values={[
        { label: 'describe_thesaurus', value: 'describe_thesaurus' }
    ]}
>
<TabItem value="describe_thesaurus">

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
    <td>The Unix timestamp when the thesaurus was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The thesaurus description. (pattern: &lt;code&gt;^\P&#123;C&#125;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ErrorMessage" /></td>
    <td><code>string</code></td>
    <td>When the Status field value is FAILED, the ErrorMessage field provides more information. (pattern: &lt;code&gt;^\P&#123;C&#125;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FileSizeBytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size of the thesaurus file in bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the thesaurus. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="IndexId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the index for the thesaurus. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The thesaurus name. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RoleArn" /></td>
    <td><code>string</code></td>
    <td>An IAM role that gives Amazon Kendra permissions to access thesaurus file specified in SourceS3Path. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SourceS3Path" /></td>
    <td><code>object</code></td>
    <td>Information required to find a specific file in an Amazon S3 bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of the thesaurus. When the value is ACTIVE, queries are able to use the thesaurus. If the Status field value is FAILED, the ErrorMessage field provides more information. If the status is ACTIVE_BUT_UPDATE_FAILED, it means that Amazon Kendra could not ingest the new thesaurus file. The old thesaurus file is still active. (CREATING, ACTIVE, DELETING, UPDATING, ACTIVE_BUT_UPDATE_FAILED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="SynonymRuleCount" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of synonym rules in the thesaurus file.</td>
</tr>
<tr>
    <td><CopyableCode code="TermCount" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of unique terms in the thesaurus file. For example, the synonyms a,b,c and a=&gt;d, the term count would be 4.</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp when the thesaurus was last updated.</td>
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
    <td><a href="#describe_thesaurus"><CopyableCode code="describe_thesaurus" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about an Amazon Kendra thesaurus.</td>
</tr>
<tr>
    <td><a href="#create_thesaurus"><CopyableCode code="create_thesaurus" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IndexId"><code>IndexId</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a>, <a href="#parameter-SourceS3Path"><code>SourceS3Path</code></a></td>
    <td></td>
    <td>Creates a thesaurus for an index. The thesaurus contains a list of synonyms in Solr format. For an example of adding a thesaurus file to an index, see Adding custom synonyms to an index.</td>
</tr>
<tr>
    <td><a href="#update_thesaurus"><CopyableCode code="update_thesaurus" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IndexId"><code>IndexId</code></a></td>
    <td></td>
    <td>Updates a thesaurus for an index.</td>
</tr>
<tr>
    <td><a href="#delete_thesaurus"><CopyableCode code="delete_thesaurus" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon Kendra thesaurus.</td>
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
    defaultValue="describe_thesaurus"
    values={[
        { label: 'describe_thesaurus', value: 'describe_thesaurus' }
    ]}
>
<TabItem value="describe_thesaurus">

Gets information about an Amazon Kendra thesaurus.

```sql
SELECT
CreatedAt,
Description,
ErrorMessage,
FileSizeBytes,
Id,
IndexId,
Name,
RoleArn,
SourceS3Path,
Status,
SynonymRuleCount,
TermCount,
UpdatedAt
FROM aws.kendra.thesaurus
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_thesaurus"
    values={[
        { label: 'create_thesaurus', value: 'create_thesaurus' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_thesaurus">

Creates a thesaurus for an index. The thesaurus contains a list of synonyms in Solr format. For an example of adding a thesaurus file to an index, see Adding custom synonyms to an index.

```sql
INSERT INTO aws.kendra.thesaurus (
IndexId,
Name,
Description,
RoleArn,
Tags,
SourceS3Path,
ClientToken,
region
)
SELECT 
'{{ IndexId }}' /* required */,
'{{ Name }}',
'{{ Description }}',
'{{ RoleArn }}' /* required */,
'{{ Tags }}',
'{{ SourceS3Path }}' /* required */,
'{{ ClientToken }}',
'{{ region }}'
RETURNING
Id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: thesaurus
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the thesaurus resource.
    - name: IndexId
      value: "{{ IndexId }}"
      description: |
        The identifier of the index for the thesaurus.
    - name: Name
      value: "{{ Name }}"
      description: |
        A name for the thesaurus.
    - name: Description
      value: "{{ Description }}"
      description: |
        A description for the thesaurus.
    - name: RoleArn
      value: "{{ RoleArn }}"
      description: |
        The Amazon Resource Name (ARN) of an IAM role with permission to access your S3 bucket that contains the thesaurus file. For more information, see IAM access roles for Amazon Kendra.
    - name: Tags
      description: |
        A list of key-value pairs that identify or categorize the thesaurus. You can also use tags to help control access to the thesaurus. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: SourceS3Path
      description: |
        Information required to find a specific file in an Amazon S3 bucket.
      value:
        Bucket: "{{ Bucket }}"
        Key: "{{ Key }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        A token that you provide to identify the request to create a thesaurus. Multiple calls to the CreateThesaurus API with the same client token will create only one thesaurus.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_thesaurus"
    values={[
        { label: 'update_thesaurus', value: 'update_thesaurus' }
    ]}
>
<TabItem value="update_thesaurus">

Updates a thesaurus for an index.

```sql
UPDATE aws.kendra.thesaurus
SET 
Id = '{{ Id }}',
Name = '{{ Name }}',
IndexId = '{{ IndexId }}',
Description = '{{ Description }}',
RoleArn = '{{ RoleArn }}',
SourceS3Path = '{{ SourceS3Path }}'
WHERE 
region = '{{ region }}' --required
AND IndexId = '{{ IndexId }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_thesaurus"
    values={[
        { label: 'delete_thesaurus', value: 'delete_thesaurus' }
    ]}
>
<TabItem value="delete_thesaurus">

Deletes an Amazon Kendra thesaurus.

```sql
DELETE FROM aws.kendra.thesaurus
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
