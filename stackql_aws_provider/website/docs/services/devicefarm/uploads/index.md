--- 
title: uploads
hide_title: false
hide_table_of_contents: false
keywords:
  - uploads
  - devicefarm
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

Creates, updates, deletes, gets or lists a <code>uploads</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="uploads" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devicefarm.uploads" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_upload"
    values={[
        { label: 'get_upload', value: 'get_upload' }
    ]}
>
<TabItem value="get_upload">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The upload's file name.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The upload's ARN. (pattern: &lt;code&gt;^arn:aws:devicefarm:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>The upload's category. Allowed values include: CURATED: An upload managed by AWS Device Farm. PRIVATE: An upload managed by the AWS Device Farm customer. (CURATED, PRIVATE)</td>
</tr>
<tr>
    <td><CopyableCode code="content_type" /></td>
    <td><code>string</code></td>
    <td>The upload's content type (for example, application/octet-stream).</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the upload was created.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>A message about the upload's result.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>string</code></td>
    <td>The upload's metadata. For example, for Android, this contains information that is parsed from the manifest and is displayed in the AWS Device Farm console after the associated app is uploaded.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The upload's status. Must be one of the following values: FAILED INITIALIZED PROCESSING SUCCEEDED (INITIALIZED, PROCESSING, SUCCEEDED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The upload's type. Must be one of the following values: ANDROID_APP IOS_APP WEB_APP EXTERNAL_DATA APPIUM_JAVA_JUNIT_TEST_PACKAGE APPIUM_JAVA_TESTNG_TEST_PACKAGE APPIUM_PYTHON_TEST_PACKAGE APPIUM_NODE_TEST_PACKAGE APPIUM_RUBY_TEST_PACKAGE APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE APPIUM_WEB_PYTHON_TEST_PACKAGE APPIUM_WEB_NODE_TEST_PACKAGE APPIUM_WEB_RUBY_TEST_PACKAGE INSTRUMENTATION_TEST_PACKAGE XCTEST_TEST_PACKAGE XCTEST_UI_TEST_PACKAGE APPIUM_JAVA_JUNIT_TEST_SPEC APPIUM_JAVA_TESTNG_TEST_SPEC APPIUM_PYTHON_TEST_SPEC APPIUM_NODE_TEST_SPEC APPIUM_RUBY_TEST_SPEC APPIUM_WEB_JAVA_JUNIT_TEST_SPEC APPIUM_WEB_JAVA_TESTNG_TEST_SPEC APPIUM_WEB_PYTHON_TEST_SPEC APPIUM_WEB_NODE_TEST_SPEC APPIUM_WEB_RUBY_TEST_SPEC INSTRUMENTATION_TEST_SPEC XCTEST_UI_TEST_SPEC (ANDROID_APP, IOS_APP, WEB_APP, EXTERNAL_DATA, APPIUM_JAVA_JUNIT_TEST_PACKAGE, APPIUM_JAVA_TESTNG_TEST_PACKAGE, APPIUM_PYTHON_TEST_PACKAGE, APPIUM_NODE_TEST_PACKAGE, APPIUM_RUBY_TEST_PACKAGE, APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE, APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE, APPIUM_WEB_PYTHON_TEST_PACKAGE, APPIUM_WEB_NODE_TEST_PACKAGE, APPIUM_WEB_RUBY_TEST_PACKAGE, CALABASH_TEST_PACKAGE, INSTRUMENTATION_TEST_PACKAGE, UIAUTOMATION_TEST_PACKAGE, UIAUTOMATOR_TEST_PACKAGE, XCTEST_TEST_PACKAGE, XCTEST_UI_TEST_PACKAGE, APPIUM_JAVA_JUNIT_TEST_SPEC, APPIUM_JAVA_TESTNG_TEST_SPEC, APPIUM_PYTHON_TEST_SPEC, APPIUM_NODE_TEST_SPEC, APPIUM_RUBY_TEST_SPEC, APPIUM_WEB_JAVA_JUNIT_TEST_SPEC, APPIUM_WEB_JAVA_TESTNG_TEST_SPEC, APPIUM_WEB_PYTHON_TEST_SPEC, APPIUM_WEB_NODE_TEST_SPEC, APPIUM_WEB_RUBY_TEST_SPEC, INSTRUMENTATION_TEST_SPEC, XCTEST_UI_TEST_SPEC)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>The presigned Amazon S3 URL that was used to store a file using a PUT request.</td>
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
    <td><a href="#get_upload"><CopyableCode code="get_upload" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about an upload.</td>
</tr>
<tr>
    <td><a href="#create_upload"><CopyableCode code="create_upload" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-projectArn"><code>projectArn</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Uploads an app or test scripts.</td>
</tr>
<tr>
    <td><a href="#update_upload"><CopyableCode code="update_upload" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-arn"><code>arn</code></a></td>
    <td></td>
    <td>Updates an uploaded test spec.</td>
</tr>
<tr>
    <td><a href="#delete_upload"><CopyableCode code="delete_upload" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an upload given the upload ARN.</td>
</tr>
<tr>
    <td><a href="#list_uploads"><CopyableCode code="list_uploads" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-arn"><code>arn</code></a></td>
    <td></td>
    <td>Gets information about uploads, given an AWS Device Farm project ARN.</td>
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
    defaultValue="get_upload"
    values={[
        { label: 'get_upload', value: 'get_upload' }
    ]}
>
<TabItem value="get_upload">

Gets information about an upload.

```sql
SELECT
name,
arn,
category,
content_type,
created,
message,
metadata,
status,
type_,
url
FROM aws.devicefarm.uploads
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_upload"
    values={[
        { label: 'create_upload', value: 'create_upload' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_upload">

Uploads an app or test scripts.

```sql
INSERT INTO aws.devicefarm.uploads (
projectArn,
name,
type,
contentType,
region
)
SELECT 
'{{ projectArn }}' /* required */,
'{{ name }}' /* required */,
'{{ type }}' /* required */,
'{{ contentType }}',
'{{ region }}'
RETURNING
upload
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: uploads
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the uploads resource.
    - name: projectArn
      value: "{{ projectArn }}"
      description: |
        The ARN of the project for the upload.
    - name: name
      value: "{{ name }}"
      description: |
        The upload's file name. The name should not contain any forward slashes (/). If you are uploading an iOS app, the file name must end with the .ipa extension. If you are uploading an Android app, the file name must end with the .apk extension. For all others, the file name must end with the .zip file extension.
    - name: type
      value: "{{ type }}"
      description: |
        The upload's upload type. Must be one of the following values: ANDROID_APP IOS_APP WEB_APP EXTERNAL_DATA APPIUM_JAVA_JUNIT_TEST_PACKAGE APPIUM_JAVA_TESTNG_TEST_PACKAGE APPIUM_PYTHON_TEST_PACKAGE APPIUM_NODE_TEST_PACKAGE APPIUM_RUBY_TEST_PACKAGE APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE APPIUM_WEB_PYTHON_TEST_PACKAGE APPIUM_WEB_NODE_TEST_PACKAGE APPIUM_WEB_RUBY_TEST_PACKAGE INSTRUMENTATION_TEST_PACKAGE XCTEST_TEST_PACKAGE XCTEST_UI_TEST_PACKAGE APPIUM_JAVA_JUNIT_TEST_SPEC APPIUM_JAVA_TESTNG_TEST_SPEC APPIUM_PYTHON_TEST_SPEC APPIUM_NODE_TEST_SPEC APPIUM_RUBY_TEST_SPEC APPIUM_WEB_JAVA_JUNIT_TEST_SPEC APPIUM_WEB_JAVA_TESTNG_TEST_SPEC APPIUM_WEB_PYTHON_TEST_SPEC APPIUM_WEB_NODE_TEST_SPEC APPIUM_WEB_RUBY_TEST_SPEC INSTRUMENTATION_TEST_SPEC XCTEST_UI_TEST_SPEC If you call CreateUpload with WEB_APP specified, AWS Device Farm throws an ArgumentException error.
      valid_values: ['ANDROID_APP', 'IOS_APP', 'WEB_APP', 'EXTERNAL_DATA', 'APPIUM_JAVA_JUNIT_TEST_PACKAGE', 'APPIUM_JAVA_TESTNG_TEST_PACKAGE', 'APPIUM_PYTHON_TEST_PACKAGE', 'APPIUM_NODE_TEST_PACKAGE', 'APPIUM_RUBY_TEST_PACKAGE', 'APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE', 'APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE', 'APPIUM_WEB_PYTHON_TEST_PACKAGE', 'APPIUM_WEB_NODE_TEST_PACKAGE', 'APPIUM_WEB_RUBY_TEST_PACKAGE', 'CALABASH_TEST_PACKAGE', 'INSTRUMENTATION_TEST_PACKAGE', 'UIAUTOMATION_TEST_PACKAGE', 'UIAUTOMATOR_TEST_PACKAGE', 'XCTEST_TEST_PACKAGE', 'XCTEST_UI_TEST_PACKAGE', 'APPIUM_JAVA_JUNIT_TEST_SPEC', 'APPIUM_JAVA_TESTNG_TEST_SPEC', 'APPIUM_PYTHON_TEST_SPEC', 'APPIUM_NODE_TEST_SPEC', 'APPIUM_RUBY_TEST_SPEC', 'APPIUM_WEB_JAVA_JUNIT_TEST_SPEC', 'APPIUM_WEB_JAVA_TESTNG_TEST_SPEC', 'APPIUM_WEB_PYTHON_TEST_SPEC', 'APPIUM_WEB_NODE_TEST_SPEC', 'APPIUM_WEB_RUBY_TEST_SPEC', 'INSTRUMENTATION_TEST_SPEC', 'XCTEST_UI_TEST_SPEC']
    - name: contentType
      value: "{{ contentType }}"
      description: |
        The upload's content type (for example, application/octet-stream).
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_upload"
    values={[
        { label: 'update_upload', value: 'update_upload' }
    ]}
>
<TabItem value="update_upload">

Updates an uploaded test spec.

```sql
UPDATE aws.devicefarm.uploads
SET 
arn = '{{ arn }}',
name = '{{ name }}',
contentType = '{{ contentType }}',
editContent = {{ editContent }}
WHERE 
region = '{{ region }}' --required
AND arn = '{{ arn }}' --required
RETURNING
upload;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_upload"
    values={[
        { label: 'delete_upload', value: 'delete_upload' }
    ]}
>
<TabItem value="delete_upload">

Deletes an upload given the upload ARN.

```sql
DELETE FROM aws.devicefarm.uploads
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_uploads"
    values={[
        { label: 'list_uploads', value: 'list_uploads' }
    ]}
>
<TabItem value="list_uploads">

Gets information about uploads, given an AWS Device Farm project ARN.

```sql
EXEC aws.devicefarm.uploads.list_uploads 
@region='{{ region }}' --required 
@@json=
'{
"arn": "{{ arn }}", 
"type": "{{ type }}", 
"nextToken": "{{ nextToken }}"
}'
;
```
</TabItem>
</Tabs>
