--- 
title: presigned_urls
hide_title: false
hide_table_of_contents: false
keywords:
  - presigned_urls
  - qapps
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

Creates, updates, deletes, gets or lists a <code>presigned_urls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="presigned_urls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.qapps.presigned_urls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#create_presigned_url"><CopyableCode code="create_presigned_url" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-instance-id"><code>instance-id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cardId"><code>cardId</code></a>, <a href="#parameter-appId"><code>appId</code></a>, <a href="#parameter-fileContentsSha256"><code>fileContentsSha256</code></a>, <a href="#parameter-fileName"><code>fileName</code></a>, <a href="#parameter-scope"><code>scope</code></a></td>
    <td></td>
    <td>Creates a presigned URL for an S3 POST operation to upload a file. You can use this URL to set a default file for a FileUploadCard in a Q App definition or to provide a file for a single Q App run. The scope parameter determines how the file will be used, either at the app definition level or the app session level. The IAM permissions are derived from the qapps:ImportDocument action. For more information on the IAM policy for Amazon Q Apps, see IAM permissions for using Amazon Q Apps.</td>
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
<tr id="parameter-instance-id">
    <td><CopyableCode code="instance-id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Amazon Q Business application environment instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="create_presigned_url"
    values={[
        { label: 'create_presigned_url', value: 'create_presigned_url' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_presigned_url">

Creates a presigned URL for an S3 POST operation to upload a file. You can use this URL to set a default file for a FileUploadCard in a Q App definition or to provide a file for a single Q App run. The scope parameter determines how the file will be used, either at the app definition level or the app session level. The IAM permissions are derived from the qapps:ImportDocument action. For more information on the IAM policy for Amazon Q Apps, see IAM permissions for using Amazon Q Apps.

```sql
INSERT INTO aws.qapps.presigned_urls (
cardId,
appId,
fileContentsSha256,
fileName,
scope,
sessionId,
`instance-id`,
region
)
SELECT 
'{{ cardId }}' /* required */,
'{{ appId }}' /* required */,
'{{ fileContentsSha256 }}' /* required */,
'{{ fileName }}' /* required */,
'{{ scope }}' /* required */,
'{{ sessionId }}',
'{{ instance-id }}',
'{{ region }}'
RETURNING
file_id,
presigned_url,
presigned_url_expiration,
presigned_url_fields
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: presigned_urls
  props:
    - name: instance-id
      value: "{{ instance-id }}"
      description: Required parameter for the presigned_urls resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the presigned_urls resource.
    - name: cardId
      value: "{{ cardId }}"
    - name: appId
      value: "{{ appId }}"
    - name: fileContentsSha256
      value: "{{ fileContentsSha256 }}"
    - name: fileName
      value: "{{ fileName }}"
    - name: scope
      value: "{{ scope }}"
      valid_values: ['APPLICATION', 'SESSION']
    - name: sessionId
      value: "{{ sessionId }}"
`}</CodeBlock>

</TabItem>
</Tabs>
