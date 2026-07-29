--- 
title: images
hide_title: false
hide_table_of_contents: false
keywords:
  - images
  - appstream
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

Creates, updates, deletes, gets or lists an <code>images</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="images" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appstream.images" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_images"
    values={[
        { label: 'describe_images', value: 'describe_images' }
    ]}
>
<TabItem value="describe_images">

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
    <td><CopyableCode code="applications" /></td>
    <td><code>array</code></td>
    <td>The applications associated with the image.</td>
</tr>
<tr>
    <td><CopyableCode code="appstream_agent_version" /></td>
    <td><code>string</code></td>
    <td>The version of the WorkSpaces Applications agent to use for instances that are launched from this image.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the image. (pattern: &lt;code&gt;^arn:aws(?:\-cn|\-iso\-b|\-iso|\-us\-gov)?:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.\\-&#93;&#123;0,1023&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="base_image_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the image from which this image was created. (pattern: &lt;code&gt;^arn:aws(?:\-cn|\-iso\-b|\-iso|\-us\-gov)?:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.\\-&#93;&#123;0,1023&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the image was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description to display.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The image name to display.</td>
</tr>
<tr>
    <td><CopyableCode code="dynamic_app_providers_enabled" /></td>
    <td><code>string</code></td>
    <td>Indicates whether dynamic app providers are enabled within an WorkSpaces Applications image or not. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="image_builder_name" /></td>
    <td><code>string</code></td>
    <td>The name of the image builder that was used to create the private image. If the image is shared, copied, or updated by using Managed Image Updates, this value is null.</td>
</tr>
<tr>
    <td><CopyableCode code="image_builder_supported" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether an image builder can be launched from this image.</td>
</tr>
<tr>
    <td><CopyableCode code="image_errors" /></td>
    <td><code>array</code></td>
    <td>Describes the errors that are returned when a new image can't be created.</td>
</tr>
<tr>
    <td><CopyableCode code="image_permissions" /></td>
    <td><code>object</code></td>
    <td>The permissions to provide to the destination AWS account for the specified image.</td>
</tr>
<tr>
    <td><CopyableCode code="image_shared_with_others" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the image is shared with another account ID. (TRUE, FALSE)</td>
</tr>
<tr>
    <td><CopyableCode code="image_type" /></td>
    <td><code>string</code></td>
    <td>The type of the image. Images created through AMI import have type "custom", while WorkSpaces Applications provided images have type "native". Custom images support additional instance types including GeneralPurpose, MemoryOptimized, ComputeOptimized, and Accelerated instance families. (CUSTOM, NATIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="latest_appstream_agent_version" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the image is using the latest WorkSpaces Applications agent version or not. (TRUE, FALSE)</td>
</tr>
<tr>
    <td><CopyableCode code="managed_software_included" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the image includes license-included applications.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the image.</td>
</tr>
<tr>
    <td><CopyableCode code="platform" /></td>
    <td><code>string</code></td>
    <td>The operating system platform of the image. (WINDOWS, WINDOWS_SERVER_2016, WINDOWS_SERVER_2019, WINDOWS_SERVER_2022, WINDOWS_SERVER_2025, AMAZON_LINUX2, RHEL8, ROCKY_LINUX8, UBUNTU_PRO_2404)</td>
</tr>
<tr>
    <td><CopyableCode code="public_base_image_released_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The release date of the public base image. For private images, this date is the release date of the base image from which the image was created.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The image starts in the PENDING state. If image creation succeeds, the state is AVAILABLE. If image creation fails, the state is FAILED. (PENDING, AVAILABLE, FAILED, COPYING, DELETING, CREATING, IMPORTING, VALIDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="state_change_reason" /></td>
    <td><code>object</code></td>
    <td>The reason why the last state change occurred.</td>
</tr>
<tr>
    <td><CopyableCode code="supported_instance_families" /></td>
    <td><code>array</code></td>
    <td>The supported instances families that determine which image a customer can use when the customer launches a fleet or image builder. The following instances families are supported: General Purpose Compute Optimized Memory Optimized Graphics G4 Graphics G5 Graphics G6</td>
</tr>
<tr>
    <td><CopyableCode code="visibility" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the image is public or private. (PUBLIC, PRIVATE, SHARED)</td>
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
    <td><a href="#describe_images"><CopyableCode code="describe_images" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list that describes one or more specified images, if the image names or image ARNs are provided. Otherwise, all images in the account are described.</td>
</tr>
<tr>
    <td><a href="#create_imported_image"><CopyableCode code="create_imported_image" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SourceAmiId"><code>SourceAmiId</code></a>, <a href="#parameter-IamRoleArn"><code>IamRoleArn</code></a></td>
    <td></td>
    <td>Creates a custom WorkSpaces Applications image by importing an EC2 AMI. This allows you to use your own customized AMI to create WorkSpaces Applications images that support additional instance types beyond the standard stream.* instances.</td>
</tr>
<tr>
    <td><a href="#create_updated_image"><CopyableCode code="create_updated_image" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-existingImageName"><code>existingImageName</code></a>, <a href="#parameter-newImageName"><code>newImageName</code></a></td>
    <td></td>
    <td>Creates a new image with the latest Windows operating system updates, driver updates, and WorkSpaces Applications agent software. For more information, see the "Update an Image by Using Managed WorkSpaces Applications Image Updates" section in Administer Your WorkSpaces Applications Images, in the Amazon WorkSpaces Applications Administration Guide.</td>
</tr>
<tr>
    <td><a href="#delete_image"><CopyableCode code="delete_image" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified image. You cannot delete an image when it is in use. After you delete an image, you cannot provision new capacity using the image.</td>
</tr>
<tr>
    <td><a href="#start_image_builder"><CopyableCode code="start_image_builder" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Starts the specified image builder.</td>
</tr>
<tr>
    <td><a href="#stop_image_builder"><CopyableCode code="stop_image_builder" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Stops the specified image builder.</td>
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
    defaultValue="describe_images"
    values={[
        { label: 'describe_images', value: 'describe_images' }
    ]}
>
<TabItem value="describe_images">

Retrieves a list that describes one or more specified images, if the image names or image ARNs are provided. Otherwise, all images in the account are described.

```sql
SELECT
applications,
appstream_agent_version,
arn,
base_image_arn,
created_time,
description,
display_name,
dynamic_app_providers_enabled,
image_builder_name,
image_builder_supported,
image_errors,
image_permissions,
image_shared_with_others,
image_type,
latest_appstream_agent_version,
managed_software_included,
name,
platform,
public_base_image_released_date,
state,
state_change_reason,
supported_instance_families,
visibility
FROM aws.appstream.images
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_imported_image"
    values={[
        { label: 'create_imported_image', value: 'create_imported_image' },
        { label: 'create_updated_image', value: 'create_updated_image' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_imported_image">

Creates a custom WorkSpaces Applications image by importing an EC2 AMI. This allows you to use your own customized AMI to create WorkSpaces Applications images that support additional instance types beyond the standard stream.* instances.

```sql
INSERT INTO aws.appstream.images (
Name,
SourceAmiId,
IamRoleArn,
Description,
DisplayName,
Tags,
RuntimeValidationConfig,
AgentSoftwareVersion,
AppCatalogConfig,
DryRun,
region
)
SELECT 
'{{ Name }}',
'{{ SourceAmiId }}' /* required */,
'{{ IamRoleArn }}' /* required */,
'{{ Description }}',
'{{ DisplayName }}',
'{{ Tags }}',
'{{ RuntimeValidationConfig }}',
'{{ AgentSoftwareVersion }}',
'{{ AppCatalogConfig }}',
{{ DryRun }},
'{{ region }}'
RETURNING
image
;
```
</TabItem>
<TabItem value="create_updated_image">

Creates a new image with the latest Windows operating system updates, driver updates, and WorkSpaces Applications agent software. For more information, see the "Update an Image by Using Managed WorkSpaces Applications Image Updates" section in Administer Your WorkSpaces Applications Images, in the Amazon WorkSpaces Applications Administration Guide.

```sql
INSERT INTO aws.appstream.images (
existingImageName,
newImageName,
newImageDescription,
newImageDisplayName,
newImageTags,
dryRun,
region
)
SELECT 
'{{ existingImageName }}' /* required */,
'{{ newImageName }}' /* required */,
'{{ newImageDescription }}',
'{{ newImageDisplayName }}',
'{{ newImageTags }}',
{{ dryRun }},
'{{ region }}'
RETURNING
can_update_image,
image
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: images
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the images resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        A unique name for the imported image. The name must be between 1 and 100 characters and can contain letters, numbers, underscores, periods, and hyphens.
    - name: SourceAmiId
      value: "{{ SourceAmiId }}"
      description: |
        The ID of the EC2 AMI to import. The AMI must meet specific requirements including Windows Server 2022 Full Base, UEFI boot mode, TPM 2.0 support, and proper drivers.
    - name: IamRoleArn
      value: "{{ IamRoleArn }}"
      description: |
        The ARN of the IAM role that allows WorkSpaces Applications to access your AMI. The role must have permissions to modify image attributes and describe images, with a trust relationship allowing appstream.amazonaws.com to assume the role.
    - name: Description
      value: "{{ Description }}"
      description: |
        An optional description for the imported image. The description must match approved regex patterns and can be up to 256 characters.
    - name: DisplayName
      value: "{{ DisplayName }}"
      description: |
        An optional display name for the imported image. The display name must match approved regex patterns and can be up to 100 characters.
    - name: Tags
      value: "{{ Tags }}"
      description: |
        The tags to apply to the imported image. Tags help you organize and manage your WorkSpaces Applications resources.
    - name: RuntimeValidationConfig
      description: |
        Configuration for runtime validation of the imported image. When specified, WorkSpaces Applications provisions an instance to test streaming functionality, which helps ensure the image is suitable for use.
      value:
        IntendedInstanceType: "{{ IntendedInstanceType }}"
    - name: AgentSoftwareVersion
      value: "{{ AgentSoftwareVersion }}"
      description: |
        The version of the WorkSpaces Applications agent to use for the imported image. Choose CURRENT_LATEST to use the agent version available at the time of import, or ALWAYS_LATEST to automatically update to the latest agent version when new versions are released.
      valid_values: ['CURRENT_LATEST', 'ALWAYS_LATEST']
    - name: AppCatalogConfig
      description: |
        Configuration for the application catalog of the imported image. This allows you to specify applications available for streaming, including their paths, icons, and launch parameters. This field contains sensitive data.
      value:
        - Name: "{{ Name }}"
          DisplayName: "{{ DisplayName }}"
          AbsoluteAppPath: "{{ AbsoluteAppPath }}"
          AbsoluteIconPath: "{{ AbsoluteIconPath }}"
          AbsoluteManifestPath: "{{ AbsoluteManifestPath }}"
          WorkingDirectory: "{{ WorkingDirectory }}"
          LaunchParameters: "{{ LaunchParameters }}"
    - name: DryRun
      value: {{ DryRun }}
      description: |
        When set to true, performs validation checks without actually creating the imported image. Use this to verify your configuration before executing the actual import operation.
    - name: existingImageName
      value: "{{ existingImageName }}"
      description: |
        The name of the image to update.
    - name: newImageName
      value: "{{ newImageName }}"
      description: |
        The name of the new image. The name must be unique within the AWS account and Region.
    - name: newImageDescription
      value: "{{ newImageDescription }}"
      description: |
        The description to display for the new image.
    - name: newImageDisplayName
      value: "{{ newImageDisplayName }}"
      description: |
        The name to display for the new image.
    - name: newImageTags
      value: "{{ newImageTags }}"
      description: |
        The tags to associate with the new image. A tag is a key-value pair, and the value is optional. For example, Environment=Test. If you do not specify a value, Environment=. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following special characters: _ . : / = + \ - @ If you do not specify a value, the value is set to an empty string. For more information about tags, see Tagging Your Resources in the Amazon WorkSpaces Applications Administration Guide.
    - name: dryRun
      value: {{ dryRun }}
      description: |
        Indicates whether to display the status of image update availability before WorkSpaces Applications initiates the process of creating a new updated image. If this value is set to true, WorkSpaces Applications displays whether image updates are available. If this value is set to false, WorkSpaces Applications initiates the process of creating a new updated image without displaying whether image updates are available.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_image"
    values={[
        { label: 'delete_image', value: 'delete_image' }
    ]}
>
<TabItem value="delete_image">

Deletes the specified image. You cannot delete an image when it is in use. After you delete an image, you cannot provision new capacity using the image.

```sql
DELETE FROM aws.appstream.images
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_image_builder"
    values={[
        { label: 'start_image_builder', value: 'start_image_builder' },
        { label: 'stop_image_builder', value: 'stop_image_builder' }
    ]}
>
<TabItem value="start_image_builder">

Starts the specified image builder.

```sql
EXEC aws.appstream.images.start_image_builder 
@region='{{ region }}' --required 
@@json=
'{
"Name": "{{ Name }}", 
"AppstreamAgentVersion": "{{ AppstreamAgentVersion }}"
}'
;
```
</TabItem>
<TabItem value="stop_image_builder">

Stops the specified image builder.

```sql
EXEC aws.appstream.images.stop_image_builder 
@region='{{ region }}' --required 
@@json=
'{
"Name": "{{ Name }}"
}'
;
```
</TabItem>
</Tabs>
