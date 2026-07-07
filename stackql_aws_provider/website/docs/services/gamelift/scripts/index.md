--- 
title: scripts
hide_title: false
hide_table_of_contents: false
keywords:
  - scripts
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

Creates, updates, deletes, gets or lists a <code>scripts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="scripts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.gamelift.scripts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_script"
    values={[
        { label: 'describe_script', value: 'describe_script' },
        { label: 'list_scripts', value: 'list_scripts' }
    ]}
>
<TabItem value="describe_script">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>A descriptive label that is associated with a script. Script names do not need to be unique.</td>
</tr>
<tr>
    <td><CopyableCode code="NodeJsVersion" /></td>
    <td><code>string</code></td>
    <td>The Node.js version used for execution of your Realtime script. The valid values are 10.x | 24.x. By default, NodeJsVersion is 10.x. This value cannot be updated later. Node.js 10 will reach end of support on September 30, 2026. See more details in the Node.js 10 FAQs. For migration guidance, see Migrating from Node.js 10 to 24. (pattern: &lt;code&gt;^&#91;0-9&#93;+\.(?:x|&#91;0-9&#93;+)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ScriptArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift Servers script resource and uniquely identifies it. ARNs are unique across all Regions. In a GameLift script ARN, the resource ID matches the ScriptId value. (pattern: &lt;code&gt;^arn:.*:script\/script-\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ScriptId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the Realtime script (pattern: &lt;code&gt;^script-\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SizeOnDisk" /></td>
    <td><code>integer (int64)</code></td>
    <td>The file size of the uploaded Realtime script, expressed in bytes. When files are uploaded from an S3 location, this value remains at "0".</td>
</tr>
<tr>
    <td><CopyableCode code="StorageLocation" /></td>
    <td><code>object</code></td>
    <td>The location of the Amazon S3 bucket where a zipped file containing your Realtime scripts is stored. The storage location must specify the Amazon S3 bucket name, the zip file name (the "key"), and a role ARN that allows Amazon GameLift Servers to access the Amazon S3 storage location. The S3 bucket must be in the same Region where you want to create a new script. By default, Amazon GameLift Servers uploads the latest version of the zip file; if you have S3 object versioning turned on, you can use the ObjectVersion parameter to specify an earlier version.</td>
</tr>
<tr>
    <td><CopyableCode code="Version" /></td>
    <td><code>string</code></td>
    <td>Version information that is associated with a build or script. Version strings do not need to be unique.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_scripts">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>A descriptive label that is associated with a script. Script names do not need to be unique.</td>
</tr>
<tr>
    <td><CopyableCode code="NodeJsVersion" /></td>
    <td><code>string</code></td>
    <td>The Node.js version used for execution of your Realtime script. The valid values are 10.x | 24.x. By default, NodeJsVersion is 10.x. This value cannot be updated later. Node.js 10 will reach end of support on September 30, 2026. See more details in the Node.js 10 FAQs. For migration guidance, see Migrating from Node.js 10 to 24. (pattern: &lt;code&gt;^&#91;0-9&#93;+\.(?:x|&#91;0-9&#93;+)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ScriptArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift Servers script resource and uniquely identifies it. ARNs are unique across all Regions. In a GameLift script ARN, the resource ID matches the ScriptId value. (pattern: &lt;code&gt;^arn:.*:script\/script-\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ScriptId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the Realtime script (pattern: &lt;code&gt;^script-\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SizeOnDisk" /></td>
    <td><code>integer (int64)</code></td>
    <td>The file size of the uploaded Realtime script, expressed in bytes. When files are uploaded from an S3 location, this value remains at "0".</td>
</tr>
<tr>
    <td><CopyableCode code="StorageLocation" /></td>
    <td><code>object</code></td>
    <td>The location of the Amazon S3 bucket where a zipped file containing your Realtime scripts is stored. The storage location must specify the Amazon S3 bucket name, the zip file name (the "key"), and a role ARN that allows Amazon GameLift Servers to access the Amazon S3 storage location. The S3 bucket must be in the same Region where you want to create a new script. By default, Amazon GameLift Servers uploads the latest version of the zip file; if you have S3 object versioning turned on, you can use the ObjectVersion parameter to specify an earlier version.</td>
</tr>
<tr>
    <td><CopyableCode code="Version" /></td>
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
    <td><a href="#describe_script"><CopyableCode code="describe_script" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2 Retrieves properties for a Realtime script. To request a script record, specify the script ID. If successful, an object containing the script properties is returned. Learn more Amazon GameLift Servers Amazon GameLift Servers Realtime Related actions All APIs by task</td>
</tr>
<tr>
    <td><a href="#list_scripts"><CopyableCode code="list_scripts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2 Retrieves script records for all Realtime scripts that are associated with the Amazon Web Services account in use. Learn more Amazon GameLift Servers Amazon GameLift Servers Realtime Related actions All APIs by task</td>
</tr>
<tr>
    <td><a href="#create_script"><CopyableCode code="create_script" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Anywhere Creates a new script record for your Amazon GameLift Servers Realtime script. Realtime scripts are JavaScript that provide configuration settings and optional custom game logic for your game. The script is deployed when you create a Amazon GameLift Servers Realtime fleet to host your game sessions. Script logic is executed during an active game session. To create a new script record, specify a script name and provide the script file(s). The script files and all dependencies must be zipped into a single file. You can pull the zip file from either of these locations: A locally available directory. Use the ZipFile parameter for this option. An Amazon Simple Storage Service (Amazon S3) bucket under your Amazon Web Services account. Use the StorageLocation parameter for this option. You'll need to have an Identity Access Management (IAM) role that allows the Amazon GameLift Servers service to access your S3 bucket. If the call is successful, a new script record is created with a unique script ID. If the script file is provided as a local file, the file is uploaded to an Amazon GameLift Servers-owned S3 bucket and the script record's storage location reflects this location. If the script file is provided as an S3 bucket, Amazon GameLift Servers accesses the file at this storage location as needed for deployment. Learn more Amazon GameLift Servers Amazon GameLift Servers Realtime Set Up a Role for Amazon GameLift Servers Access Related actions All APIs by task</td>
</tr>
<tr>
    <td><a href="#update_script"><CopyableCode code="update_script" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ScriptId"><code>ScriptId</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2 Updates Realtime script metadata and content. To update script metadata, specify the script ID and provide updated name and/or version values. To update script content, provide an updated zip file by pointing to either a local file or an Amazon S3 bucket location. You can use either method regardless of how the original script was uploaded. Use the Version parameter to track updates to the script. If the call is successful, the updated metadata is stored in the script record and a revised script is uploaded to the Amazon GameLift Servers service. Once the script is updated and acquired by a fleet instance, the new version is used for all new game sessions. Learn more Amazon GameLift Servers Amazon GameLift Servers Realtime Related actions All APIs by task</td>
</tr>
<tr>
    <td><a href="#delete_script"><CopyableCode code="delete_script" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2 Deletes a Realtime script. This operation permanently deletes the script record. If script files were uploaded, they are also deleted (files stored in an S3 bucket are not deleted). To delete a script, specify the script ID. Before deleting a script, be sure to terminate all fleets that are deployed with the script being deleted. Fleet instances periodically check for script updates, and if the script record no longer exists, the instance will go into an error state and be unable to host game sessions. Learn more Amazon GameLift Servers Amazon GameLift Servers Realtime Related actions All APIs by task</td>
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
    defaultValue="describe_script"
    values={[
        { label: 'describe_script', value: 'describe_script' },
        { label: 'list_scripts', value: 'list_scripts' }
    ]}
>
<TabItem value="describe_script">

This API works with the following fleet types: EC2 Retrieves properties for a Realtime script. To request a script record, specify the script ID. If successful, an object containing the script properties is returned. Learn more Amazon GameLift Servers Amazon GameLift Servers Realtime Related actions All APIs by task

```sql
SELECT
CreationTime,
Name,
NodeJsVersion,
ScriptArn,
ScriptId,
SizeOnDisk,
StorageLocation,
Version
FROM aws.gamelift.scripts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_scripts">

This API works with the following fleet types: EC2 Retrieves script records for all Realtime scripts that are associated with the Amazon Web Services account in use. Learn more Amazon GameLift Servers Amazon GameLift Servers Realtime Related actions All APIs by task

```sql
SELECT
CreationTime,
Name,
NodeJsVersion,
ScriptArn,
ScriptId,
SizeOnDisk,
StorageLocation,
Version
FROM aws.gamelift.scripts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_script"
    values={[
        { label: 'create_script', value: 'create_script' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_script">

This API works with the following fleet types: EC2, Anywhere Creates a new script record for your Amazon GameLift Servers Realtime script. Realtime scripts are JavaScript that provide configuration settings and optional custom game logic for your game. The script is deployed when you create a Amazon GameLift Servers Realtime fleet to host your game sessions. Script logic is executed during an active game session. To create a new script record, specify a script name and provide the script file(s). The script files and all dependencies must be zipped into a single file. You can pull the zip file from either of these locations: A locally available directory. Use the ZipFile parameter for this option. An Amazon Simple Storage Service (Amazon S3) bucket under your Amazon Web Services account. Use the StorageLocation parameter for this option. You'll need to have an Identity Access Management (IAM) role that allows the Amazon GameLift Servers service to access your S3 bucket. If the call is successful, a new script record is created with a unique script ID. If the script file is provided as a local file, the file is uploaded to an Amazon GameLift Servers-owned S3 bucket and the script record's storage location reflects this location. If the script file is provided as an S3 bucket, Amazon GameLift Servers accesses the file at this storage location as needed for deployment. Learn more Amazon GameLift Servers Amazon GameLift Servers Realtime Set Up a Role for Amazon GameLift Servers Access Related actions All APIs by task

```sql
INSERT INTO aws.gamelift.scripts (
Name,
Version,
StorageLocation,
ZipFile,
Tags,
NodeJsVersion,
region
)
SELECT 
'{{ Name }}',
'{{ Version }}',
'{{ StorageLocation }}',
'{{ ZipFile }}',
'{{ Tags }}',
'{{ NodeJsVersion }}',
'{{ region }}'
RETURNING
Script
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: scripts
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the scripts resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        A descriptive label that is associated with a script. Script names do not need to be unique. You can use UpdateScript to change this value later.
    - name: Version
      value: "{{ Version }}"
      description: |
        Version information that is associated with a build or script. Version strings do not need to be unique. You can use UpdateScript to change this value later.
    - name: StorageLocation
      description: |
        The location of the Amazon S3 bucket where a zipped file containing your Realtime scripts is stored. The storage location must specify the Amazon S3 bucket name, the zip file name (the "key"), and a role ARN that allows Amazon GameLift Servers to access the Amazon S3 storage location. The S3 bucket must be in the same Region where you want to create a new script. By default, Amazon GameLift Servers uploads the latest version of the zip file; if you have S3 object versioning turned on, you can use the ObjectVersion parameter to specify an earlier version.
      value:
        Bucket: "{{ Bucket }}"
        Key: "{{ Key }}"
        RoleArn: "{{ RoleArn }}"
        ObjectVersion: "{{ ObjectVersion }}"
    - name: ZipFile
      value: "{{ ZipFile }}"
      description: |
        A data object containing your Realtime scripts and dependencies as a zip file. The zip file can have one or multiple files. Maximum size of a zip file is 5 MB. When using the Amazon Web Services CLI tool to create a script, this parameter is set to the zip file name. It must be prepended with the string "fileb://" to indicate that the file data is a binary object. For example: --zip-file fileb://myRealtimeScript.zip.
    - name: Tags
      description: |
        A list of labels to assign to the new script resource. Tags are developer-defined key-value pairs. Tagging Amazon Web Services resources are useful for resource management, access management and cost allocation. For more information, see Tagging Amazon Web Services Resources in the Amazon Web Services General Reference. Once the resource is created, you can use TagResource, UntagResource, and ListTagsForResource to add, remove, and view tags. The maximum tag limit may be lower than stated. See the Amazon Web Services General Reference for actual tagging limits.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: NodeJsVersion
      value: "{{ NodeJsVersion }}"
      description: |
        The Node.js version used for execution of your Realtime script. The valid values are 10.x | 24.x. By default, NodeJsVersion is 10.x. This value cannot be updated later. Node.js 10 will reach end of support on September 30, 2026. See more details in the Node.js 10 FAQs. For migration guidance, see Migrating from Node.js 10 to 24.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_script"
    values={[
        { label: 'update_script', value: 'update_script' }
    ]}
>
<TabItem value="update_script">

This API works with the following fleet types: EC2 Updates Realtime script metadata and content. To update script metadata, specify the script ID and provide updated name and/or version values. To update script content, provide an updated zip file by pointing to either a local file or an Amazon S3 bucket location. You can use either method regardless of how the original script was uploaded. Use the Version parameter to track updates to the script. If the call is successful, the updated metadata is stored in the script record and a revised script is uploaded to the Amazon GameLift Servers service. Once the script is updated and acquired by a fleet instance, the new version is used for all new game sessions. Learn more Amazon GameLift Servers Amazon GameLift Servers Realtime Related actions All APIs by task

```sql
UPDATE aws.gamelift.scripts
SET 
ScriptId = '{{ ScriptId }}',
Name = '{{ Name }}',
Version = '{{ Version }}',
StorageLocation = '{{ StorageLocation }}',
ZipFile = '{{ ZipFile }}'
WHERE 
region = '{{ region }}' --required
AND ScriptId = '{{ ScriptId }}' --required
RETURNING
Script;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_script"
    values={[
        { label: 'delete_script', value: 'delete_script' }
    ]}
>
<TabItem value="delete_script">

This API works with the following fleet types: EC2 Deletes a Realtime script. This operation permanently deletes the script record. If script files were uploaded, they are also deleted (files stored in an S3 bucket are not deleted). To delete a script, specify the script ID. Before deleting a script, be sure to terminate all fleets that are deployed with the script being deleted. Fleet instances periodically check for script updates, and if the script record no longer exists, the instance will go into an error state and be unable to host game sessions. Learn more Amazon GameLift Servers Amazon GameLift Servers Realtime Related actions All APIs by task

```sql
DELETE FROM aws.gamelift.scripts
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
