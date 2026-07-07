--- 
title: access_points
hide_title: false
hide_table_of_contents: false
keywords:
  - access_points
  - s3files
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

Creates, updates, deletes, gets or lists an <code>access_points</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="access_points" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3files.access_points" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_access_points"
    values={[
        { label: 'list_access_points', value: 'list_access_points' },
        { label: 'get_access_point', value: 'get_access_point' }
    ]}
>
<TabItem value="list_access_points">

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
    <td>The name of the access point. (pattern: &lt;code&gt;(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-@&#93;*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="accessPointArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the access point. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:s3files:&#91;0-9a-z-:&#93;+:file-system/fs-&#91;0-9a-f&#93;&#123;17,40&#125;/access-point/fsap-&#91;0-9a-f&#93;&#123;17,40&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="accessPointId" /></td>
    <td><code>string</code></td>
    <td>The ID of the access point. (pattern: &lt;code&gt;(arn:aws&#91;-a-z&#93;*:s3files:&#91;0-9a-z-:&#93;+:file-system/fs-&#91;0-9a-f&#93;&#123;17,40&#125;/access-point/fsap-&#91;0-9a-f&#93;&#123;17,40&#125;|fsap-&#91;0-9a-f&#93;&#123;17,40&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="fileSystemId" /></td>
    <td><code>string</code></td>
    <td>The ID of the S3 File System. (pattern: &lt;code&gt;(arn:aws&#91;-a-z&#93;*:s3files:&#91;0-9a-z-:&#93;+:file-system/fs-&#91;0-9a-f&#93;&#123;17,40&#125;|fs-&#91;0-9a-f&#93;&#123;17,40&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ownerId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the access point owner. (pattern: &lt;code&gt;(\d&#123;12&#125;)|(\d&#123;4&#125;-&#123;4&#125;-\d&#123;4&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="posixUser" /></td>
    <td><code>object</code></td>
    <td>Specifies the POSIX identity with uid, gid, and secondary group IDs for user enforcement.</td>
</tr>
<tr>
    <td><CopyableCode code="rootDirectory" /></td>
    <td><code>object</code></td>
    <td>Specifies the root directory path and optional creation permissions for newly created directories.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the access point. (available, creating, deleting, deleted, error, updating)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_access_point">

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
    <td>The name of the access point. (pattern: &lt;code&gt;(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-@&#93;*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="accessPointArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the access point. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:s3files:&#91;0-9a-z-:&#93;+:file-system/fs-&#91;0-9a-f&#93;&#123;17,40&#125;/access-point/fsap-&#91;0-9a-f&#93;&#123;17,40&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="accessPointId" /></td>
    <td><code>string</code></td>
    <td>The ID of the access point. (pattern: &lt;code&gt;(arn:aws&#91;-a-z&#93;*:s3files:&#91;0-9a-z-:&#93;+:file-system/fs-&#91;0-9a-f&#93;&#123;17,40&#125;/access-point/fsap-&#91;0-9a-f&#93;&#123;17,40&#125;|fsap-&#91;0-9a-f&#93;&#123;17,40&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>The client token used for idempotency when the access point was created. (pattern: &lt;code&gt;(.+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="fileSystemId" /></td>
    <td><code>string</code></td>
    <td>The ID of the S3 File System. (pattern: &lt;code&gt;(arn:aws&#91;-a-z&#93;*:s3files:&#91;0-9a-z-:&#93;+:file-system/fs-&#91;0-9a-f&#93;&#123;17,40&#125;|fs-&#91;0-9a-f&#93;&#123;17,40&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ownerId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the access point owner. (pattern: &lt;code&gt;(\d&#123;12&#125;)|(\d&#123;4&#125;-&#123;4&#125;-\d&#123;4&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="posixUser" /></td>
    <td><code>object</code></td>
    <td>Specifies the POSIX identity with uid, gid, and secondary group IDs for user enforcement.</td>
</tr>
<tr>
    <td><CopyableCode code="rootDirectory" /></td>
    <td><code>object</code></td>
    <td>Specifies the root directory path and optional creation permissions for newly created directories.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the access point. (available, creating, deleting, deleted, error, updating)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>The tags associated with the access point.</td>
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
    <td><a href="#list_access_points"><CopyableCode code="list_access_points" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-fileSystemId"><code>fileSystemId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns resource information for all S3 File System Access Points associated with the specified S3 File System.</td>
</tr>
<tr>
    <td><a href="#get_access_point"><CopyableCode code="get_access_point" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-access_point_id"><code>access_point_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns resource information for an S3 File System Access Point.</td>
</tr>
<tr>
    <td><a href="#create_access_point"><CopyableCode code="create_access_point" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-fileSystemId"><code>fileSystemId</code></a></td>
    <td></td>
    <td>Creates an S3 File System Access Point for application-specific access with POSIX user identity and root directory enforcement. Access points provide a way to manage access to shared datasets in multi-tenant scenarios.</td>
</tr>
<tr>
    <td><a href="#delete_access_point"><CopyableCode code="delete_access_point" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-access_point_id"><code>access_point_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an S3 File System Access Point. This operation is irreversible.</td>
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
<tr id="parameter-access_point_id">
    <td><CopyableCode code="access_point_id" /></td>
    <td><code>string</code></td>
    <td>The ID or Amazon Resource Name (ARN) of the access point to delete.</td>
</tr>
<tr id="parameter-fileSystemId">
    <td><CopyableCode code="fileSystemId" /></td>
    <td><code>string</code></td>
    <td>The ID or Amazon Resource Name (ARN) of the S3 File System to list access points for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of access points to return in a single response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token returned from a previous call to continue listing access points.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_access_points"
    values={[
        { label: 'list_access_points', value: 'list_access_points' },
        { label: 'get_access_point', value: 'get_access_point' }
    ]}
>
<TabItem value="list_access_points">

Returns resource information for all S3 File System Access Points associated with the specified S3 File System.

```sql
SELECT
name,
accessPointArn,
accessPointId,
fileSystemId,
ownerId,
posixUser,
rootDirectory,
status
FROM aws.s3files.access_points
WHERE fileSystemId = '{{ fileSystemId }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
<TabItem value="get_access_point">

Returns resource information for an S3 File System Access Point.

```sql
SELECT
name,
accessPointArn,
accessPointId,
clientToken,
fileSystemId,
ownerId,
posixUser,
rootDirectory,
status,
tags
FROM aws.s3files.access_points
WHERE access_point_id = '{{ access_point_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_access_point"
    values={[
        { label: 'create_access_point', value: 'create_access_point' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_access_point">

Creates an S3 File System Access Point for application-specific access with POSIX user identity and root directory enforcement. Access points provide a way to manage access to shared datasets in multi-tenant scenarios.

```sql
INSERT INTO aws.s3files.access_points (
clientToken,
tags,
fileSystemId,
posixUser,
rootDirectory,
region
)
SELECT 
'{{ clientToken }}',
'{{ tags }}',
'{{ fileSystemId }}' /* required */,
'{{ posixUser }}',
'{{ rootDirectory }}',
'{{ region }}'
RETURNING
name,
accessPointArn,
accessPointId,
clientToken,
fileSystemId,
ownerId,
posixUser,
rootDirectory,
status,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: access_points
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the access_points resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: tags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: fileSystemId
      value: "{{ fileSystemId }}"
    - name: posixUser
      description: |
        Specifies the POSIX identity with uid, gid, and secondary group IDs for user enforcement.
      value:
        uid: {{ uid }}
        gid: {{ gid }}
        secondaryGids:
          - {{ secondaryGids }}
    - name: rootDirectory
      description: |
        Specifies the root directory path and optional creation permissions for newly created directories.
      value:
        path: "{{ path }}"
        creationPermissions:
          ownerUid: {{ ownerUid }}
          ownerGid: {{ ownerGid }}
          permissions: "{{ permissions }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_access_point"
    values={[
        { label: 'delete_access_point', value: 'delete_access_point' }
    ]}
>
<TabItem value="delete_access_point">

Deletes an S3 File System Access Point. This operation is irreversible.

```sql
DELETE FROM aws.s3files.access_points
WHERE access_point_id = '{{ access_point_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
