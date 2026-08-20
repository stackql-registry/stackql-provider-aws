--- 
title: builds
hide_title: false
hide_table_of_contents: false
keywords:
  - builds
  - gamelift
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

Creates, updates, deletes, gets or lists a <code>builds</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="builds" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.gamelift.builds" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_build"
    values={[
        { label: 'describe_build', value: 'describe_build' },
        { label: 'list_builds', value: 'list_builds' }
    ]}
>
<TabItem value="describe_build">

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
    <td><CopyableCode code="build_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift Servers build resource and uniquely identifies it. ARNs are unique across all Regions. Format is arn:aws:gamelift:<code>&lt;region&gt;</code>::build/build-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912. In a GameLift build ARN, the resource ID matches the BuildId value. (pattern: &lt;code&gt;^arn:.*:build\/build-\S+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="build_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the build. (pattern: &lt;code&gt;^build-\S+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A descriptive label that is associated with a build. Build names do not need to be unique. It can be set using CreateBuild or UpdateBuild.</td>
</tr>
<tr>
    <td><CopyableCode code="operating_system" /></td>
    <td><code>string</code></td>
    <td>Operating system that the game server binaries are built to run on. This value determines the type of fleet resources that you can use for this build. Amazon Linux 2 (AL2) will reach end of support on 6/30/2026. See more details in the Amazon Linux 2 FAQs. For game servers that are hosted on AL2 and use server SDK version 4.x for Amazon GameLift Servers, first update the game server build to server SDK 5.x, and then deploy to AL2023 instances. See Migrate to server SDK version 5. (WINDOWS_2012, AMAZON_LINUX, AMAZON_LINUX_2, WINDOWS_2016, AMAZON_LINUX_2023, WINDOWS_2022)</td>
</tr>
<tr>
    <td><CopyableCode code="server_sdk_version" /></td>
    <td><code>string</code></td>
    <td>The Amazon GameLift Servers Server SDK version used to develop your game server. (pattern: &lt;code&gt;^\d+\.\d+\.\d+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="size_on_disk" /></td>
    <td><code>integer (int64)</code></td>
    <td>File size of the uploaded game build, expressed in bytes. When the build status is INITIALIZED or when using a custom Amazon S3 storage location, this value is 0.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Current status of the build. Possible build statuses include the following: INITIALIZED -- A new build has been defined, but no files have been uploaded. You cannot create fleets for builds that are in this status. When a build is successfully created, the build status is set to this value. READY -- The game build has been successfully uploaded. You can now create new fleets for this build. FAILED -- The game build upload failed. You cannot create new fleets for this build. (INITIALIZED, READY, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Version information that is associated with a build or script. Version strings do not need to be unique.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_builds">

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
    <td><CopyableCode code="build_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift Servers build resource and uniquely identifies it. ARNs are unique across all Regions. Format is arn:aws:gamelift:<code>&lt;region&gt;</code>::build/build-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912. In a GameLift build ARN, the resource ID matches the BuildId value. (pattern: &lt;code&gt;^arn:.*:build\/build-\S+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="build_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the build. (pattern: &lt;code&gt;^build-\S+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A descriptive label that is associated with a build. Build names do not need to be unique. It can be set using CreateBuild or UpdateBuild.</td>
</tr>
<tr>
    <td><CopyableCode code="operating_system" /></td>
    <td><code>string</code></td>
    <td>Operating system that the game server binaries are built to run on. This value determines the type of fleet resources that you can use for this build. Amazon Linux 2 (AL2) will reach end of support on 6/30/2026. See more details in the Amazon Linux 2 FAQs. For game servers that are hosted on AL2 and use server SDK version 4.x for Amazon GameLift Servers, first update the game server build to server SDK 5.x, and then deploy to AL2023 instances. See Migrate to server SDK version 5. (WINDOWS_2012, AMAZON_LINUX, AMAZON_LINUX_2, WINDOWS_2016, AMAZON_LINUX_2023, WINDOWS_2022)</td>
</tr>
<tr>
    <td><CopyableCode code="server_sdk_version" /></td>
    <td><code>string</code></td>
    <td>The Amazon GameLift Servers Server SDK version used to develop your game server. (pattern: &lt;code&gt;^\d+\.\d+\.\d+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="size_on_disk" /></td>
    <td><code>integer (int64)</code></td>
    <td>File size of the uploaded game build, expressed in bytes. When the build status is INITIALIZED or when using a custom Amazon S3 storage location, this value is 0.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Current status of the build. Possible build statuses include the following: INITIALIZED -- A new build has been defined, but no files have been uploaded. You cannot create fleets for builds that are in this status. When a build is successfully created, the build status is set to this value. READY -- The game build has been successfully uploaded. You can now create new fleets for this build. FAILED -- The game build upload failed. You cannot create new fleets for this build. (INITIALIZED, READY, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Version information that is associated with a build or script. Version strings do not need to be unique.</td>
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
    <td><a href="#describe_build"><CopyableCode code="describe_build" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2 Retrieves properties for a custom game build. To request a build resource, specify a build ID. If successful, an object containing the build properties is returned. Learn more Upload a Custom Server Build All APIs by task</td>
</tr>
<tr>
    <td><a href="#list_builds"><CopyableCode code="list_builds" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2 Retrieves build resources for all builds associated with the Amazon Web Services account in use. You can limit results to builds that are in a specific status by using the Status parameter. Use the pagination parameters to retrieve results in Build resources are not listed in any particular order. Learn more Upload a Custom Server Build All APIs by task</td>
</tr>
<tr>
    <td><a href="#create_build"><CopyableCode code="create_build" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Anywhere Creates a new Amazon GameLift Servers build resource for your game server binary files. Combine game server binaries into a zip file for use with Amazon GameLift Servers. When setting up a new game build for Amazon GameLift Servers, we recommend using the CLI command upload-build . This helper command combines two tasks: (1) it uploads your build files from a file directory to an Amazon GameLift Servers Amazon S3 location, and (2) it creates a new build resource. You can use the CreateBuild operation in the following scenarios: Create a new game build with build files that are in an Amazon S3 location under an Amazon Web Services account that you control. To use this option, you give Amazon GameLift Servers access to the Amazon S3 bucket. With permissions in place, specify a build name, operating system, and the Amazon S3 storage location of your game build. Upload your build files to a Amazon GameLift Servers Amazon S3 location. To use this option, specify a build name and operating system. This operation creates a new build resource and also returns an Amazon S3 location with temporary access credentials. Use the credentials to manually upload your build files to the specified Amazon S3 location. For more information, see Uploading Objects in the Amazon S3 Developer Guide. After you upload build files to the Amazon GameLift Servers Amazon S3 location, you can't update them. If successful, this operation creates a new build resource with a unique build ID and places it in INITIALIZED status. A build must be in READY status before you can create fleets with it. Learn more Uploading Your Game Create a Build with Files in Amazon S3 All APIs by task</td>
</tr>
<tr>
    <td><a href="#update_build"><CopyableCode code="update_build" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-BuildId"><code>BuildId</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2 Updates metadata in a build resource, including the build name and version. To update the metadata, specify the build ID to update and provide the new values. If successful, a build object containing the updated metadata is returned. Learn more Upload a Custom Server Build All APIs by task</td>
</tr>
<tr>
    <td><a href="#delete_build"><CopyableCode code="delete_build" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2 Deletes a build. This operation permanently deletes the build resource and any uploaded build files. Deleting a build does not affect the status of any active fleets using the build, but you can no longer create new fleets with the deleted build. To delete a build, specify the build ID. Learn more Upload a Custom Server Build All APIs by task</td>
</tr>
<tr>
    <td><a href="#request_upload_credentials"><CopyableCode code="request_upload_credentials" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-BuildId"><code>BuildId</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2 Retrieves a fresh set of credentials for use when uploading a new set of game build files to Amazon GameLift Servers's Amazon S3. This is done as part of the build creation process; see CreateBuild. To request new credentials, specify the build ID as returned with an initial CreateBuild request. If successful, a new set of credentials are returned, along with the S3 storage location associated with the build ID. Learn more Create a Build with Files in S3 All APIs by task</td>
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
    defaultValue="describe_build"
    values={[
        { label: 'describe_build', value: 'describe_build' },
        { label: 'list_builds', value: 'list_builds' }
    ]}
>
<TabItem value="describe_build">

This API works with the following fleet types: EC2 Retrieves properties for a custom game build. To request a build resource, specify a build ID. If successful, an object containing the build properties is returned. Learn more Upload a Custom Server Build All APIs by task

```sql
SELECT
build_arn,
build_id,
creation_time,
name,
operating_system,
server_sdk_version,
size_on_disk,
status,
version
FROM aws.gamelift.builds
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_builds">

This API works with the following fleet types: EC2 Retrieves build resources for all builds associated with the Amazon Web Services account in use. You can limit results to builds that are in a specific status by using the Status parameter. Use the pagination parameters to retrieve results in Build resources are not listed in any particular order. Learn more Upload a Custom Server Build All APIs by task

```sql
SELECT
build_arn,
build_id,
creation_time,
name,
operating_system,
server_sdk_version,
size_on_disk,
status,
version
FROM aws.gamelift.builds
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_build"
    values={[
        { label: 'create_build', value: 'create_build' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_build">

This API works with the following fleet types: EC2, Anywhere Creates a new Amazon GameLift Servers build resource for your game server binary files. Combine game server binaries into a zip file for use with Amazon GameLift Servers. When setting up a new game build for Amazon GameLift Servers, we recommend using the CLI command upload-build . This helper command combines two tasks: (1) it uploads your build files from a file directory to an Amazon GameLift Servers Amazon S3 location, and (2) it creates a new build resource. You can use the CreateBuild operation in the following scenarios: Create a new game build with build files that are in an Amazon S3 location under an Amazon Web Services account that you control. To use this option, you give Amazon GameLift Servers access to the Amazon S3 bucket. With permissions in place, specify a build name, operating system, and the Amazon S3 storage location of your game build. Upload your build files to a Amazon GameLift Servers Amazon S3 location. To use this option, specify a build name and operating system. This operation creates a new build resource and also returns an Amazon S3 location with temporary access credentials. Use the credentials to manually upload your build files to the specified Amazon S3 location. For more information, see Uploading Objects in the Amazon S3 Developer Guide. After you upload build files to the Amazon GameLift Servers Amazon S3 location, you can't update them. If successful, this operation creates a new build resource with a unique build ID and places it in INITIALIZED status. A build must be in READY status before you can create fleets with it. Learn more Uploading Your Game Create a Build with Files in Amazon S3 All APIs by task

```sql
INSERT INTO aws.gamelift.builds (
Name,
Version,
StorageLocation,
OperatingSystem,
Tags,
ServerSdkVersion,
region
)
SELECT 
'{{ Name }}',
'{{ Version }}',
'{{ StorageLocation }}',
'{{ OperatingSystem }}',
'{{ Tags }}',
'{{ ServerSdkVersion }}',
'{{ region }}'
RETURNING
build,
storage_location,
upload_credentials
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: builds
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the builds resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        A descriptive label that is associated with a build. Build names do not need to be unique. You can change this value later.
    - name: Version
      value: "{{ Version }}"
      description: |
        Version information that is associated with a build or script. Version strings do not need to be unique. You can change this value later.
    - name: StorageLocation
      description: |
        Information indicating where your game build files are stored. Use this parameter only when creating a build with files stored in an Amazon S3 bucket that you own. The storage location must specify an Amazon S3 bucket name and key. The location must also specify a role ARN that you set up to allow Amazon GameLift Servers to access your Amazon S3 bucket. The S3 bucket and your new build must be in the same Region. If a StorageLocation is specified, the size of your file can be found in your Amazon S3 bucket. Amazon GameLift Servers will report a SizeOnDisk of 0.
      value:
        Bucket: "{{ Bucket }}"
        Key: "{{ Key }}"
        RoleArn: "{{ RoleArn }}"
        ObjectVersion: "{{ ObjectVersion }}"
    - name: OperatingSystem
      value: "{{ OperatingSystem }}"
      description: |
        The operating system that your game server binaries run on. This value determines the type of fleet resources that you use for this build. If your game build contains multiple executables, they all must run on the same operating system. You must specify a valid operating system in this request. There is no default value. You can't change a build's operating system later. Amazon Linux 2 (AL2) will reach end of support on 6/30/2026. See more details in the Amazon Linux 2 FAQs. For game servers that are hosted on AL2 and use server SDK version 4.x for Amazon GameLift Servers, first update the game server build to server SDK 5.x, and then deploy to AL2023 instances. See Migrate to server SDK version 5. Windows Server 2016 will reach end of support on 1/12/2027. For game servers that are hosted on Windows Server 2016 and use server SDK version 4.x for Amazon GameLift Servers, first update the game server build to server SDK 5.x, and then deploy to Windows Server 2022 instances. See Migrate to server SDK version 5.
      valid_values: ['WINDOWS_2012', 'AMAZON_LINUX', 'AMAZON_LINUX_2', 'WINDOWS_2016', 'AMAZON_LINUX_2023', 'WINDOWS_2022']
    - name: Tags
      description: |
        A list of labels to assign to the new build resource. Tags are developer defined key-value pairs. Tagging Amazon Web Services resources are useful for resource management, access management and cost allocation. For more information, see Tagging Amazon Web Services Resources in the Amazon Web Services General Reference. Once the resource is created, you can use TagResource, UntagResource, and ListTagsForResource to add, remove, and view tags. The maximum tag limit may be lower than stated. See the Amazon Web Services General Reference for actual tagging limits.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: ServerSdkVersion
      value: "{{ ServerSdkVersion }}"
      description: |
        A server SDK version you used when integrating your game server build with Amazon GameLift Servers. For more information see Integrate games with custom game servers. By default Amazon GameLift Servers sets this value to 4.0.2.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_build"
    values={[
        { label: 'update_build', value: 'update_build' }
    ]}
>
<TabItem value="update_build">

This API works with the following fleet types: EC2 Updates metadata in a build resource, including the build name and version. To update the metadata, specify the build ID to update and provide the new values. If successful, a build object containing the updated metadata is returned. Learn more Upload a Custom Server Build All APIs by task

```sql
UPDATE aws.gamelift.builds
SET 
BuildId = '{{ BuildId }}',
Name = '{{ Name }}',
Version = '{{ Version }}'
WHERE 
region = '{{ region }}' --required
AND BuildId = '{{ BuildId }}' --required
RETURNING
build;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_build"
    values={[
        { label: 'delete_build', value: 'delete_build' }
    ]}
>
<TabItem value="delete_build">

This API works with the following fleet types: EC2 Deletes a build. This operation permanently deletes the build resource and any uploaded build files. Deleting a build does not affect the status of any active fleets using the build, but you can no longer create new fleets with the deleted build. To delete a build, specify the build ID. Learn more Upload a Custom Server Build All APIs by task

```sql
DELETE FROM aws.gamelift.builds
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="request_upload_credentials"
    values={[
        { label: 'request_upload_credentials', value: 'request_upload_credentials' }
    ]}
>
<TabItem value="request_upload_credentials">

This API works with the following fleet types: EC2 Retrieves a fresh set of credentials for use when uploading a new set of game build files to Amazon GameLift Servers's Amazon S3. This is done as part of the build creation process; see CreateBuild. To request new credentials, specify the build ID as returned with an initial CreateBuild request. If successful, a new set of credentials are returned, along with the S3 storage location associated with the build ID. Learn more Create a Build with Files in S3 All APIs by task

```sql
EXEC aws.gamelift.builds.request_upload_credentials 
@region='{{ region }}' --required 
@@json=
'{
"BuildId": "{{ BuildId }}"
}'
;
```
</TabItem>
</Tabs>
