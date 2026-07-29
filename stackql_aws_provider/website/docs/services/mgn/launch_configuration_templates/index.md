--- 
title: launch_configuration_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - launch_configuration_templates
  - mgn
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

Creates, updates, deletes, gets or lists a <code>launch_configuration_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="launch_configuration_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mgn.launch_configuration_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_launch_configuration_templates"
    values={[
        { label: 'describe_launch_configuration_templates', value: 'describe_launch_configuration_templates' }
    ]}
>
<TabItem value="describe_launch_configuration_templates">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>ARN of the Launch Configuration Template.</td>
</tr>
<tr>
    <td><CopyableCode code="associate_public_ip_address" /></td>
    <td><code>boolean</code></td>
    <td>Associate public Ip address.</td>
</tr>
<tr>
    <td><CopyableCode code="boot_mode" /></td>
    <td><code>string</code></td>
    <td>Launch configuration template boot mode. (LEGACY_BIOS, UEFI, USE_SOURCE)</td>
</tr>
<tr>
    <td><CopyableCode code="copy_private_ip" /></td>
    <td><code>boolean</code></td>
    <td>Copy private Ip.</td>
</tr>
<tr>
    <td><CopyableCode code="copy_tags" /></td>
    <td><code>boolean</code></td>
    <td>Copy tags.</td>
</tr>
<tr>
    <td><CopyableCode code="ec_2_launch_template_id" /></td>
    <td><code>string</code></td>
    <td>EC2 launch template ID. (pattern: &lt;code&gt;lt-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="enable_map_auto_tagging" /></td>
    <td><code>boolean</code></td>
    <td>Enable map auto tagging.</td>
</tr>
<tr>
    <td><CopyableCode code="enable_parameters_encryption" /></td>
    <td><code>boolean</code></td>
    <td>Enable parameters encryption.</td>
</tr>
<tr>
    <td><CopyableCode code="large_volume_conf" /></td>
    <td><code>object</code></td>
    <td>Launch template disk configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="launch_configuration_template_id" /></td>
    <td><code>string</code></td>
    <td>ID of the Launch Configuration Template. (pattern: &lt;code&gt;lct-&#91;0-9a-zA-Z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="launch_disposition" /></td>
    <td><code>string</code></td>
    <td>Launch disposition. (STOPPED, STARTED)</td>
</tr>
<tr>
    <td><CopyableCode code="licensing" /></td>
    <td><code>object</code></td>
    <td>Configure Licensing.</td>
</tr>
<tr>
    <td><CopyableCode code="map_auto_tagging_mpe_id" /></td>
    <td><code>string</code></td>
    <td>Launch configuration template map auto tagging MPE ID.</td>
</tr>
<tr>
    <td><CopyableCode code="parameters_encryption_key" /></td>
    <td><code>string</code></td>
    <td>Parameters encryption key.</td>
</tr>
<tr>
    <td><CopyableCode code="post_launch_actions" /></td>
    <td><code>object</code></td>
    <td>Post Launch Actions to executed on the Test or Cutover instance.</td>
</tr>
<tr>
    <td><CopyableCode code="small_volume_conf" /></td>
    <td><code>object</code></td>
    <td>Launch template disk configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="small_volume_max_size" /></td>
    <td><code>integer (int64)</code></td>
    <td>Small volume maximum size.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags of the Launch Configuration Template.</td>
</tr>
<tr>
    <td><CopyableCode code="target_instance_type_right_sizing_method" /></td>
    <td><code>string</code></td>
    <td>Target instance type right-sizing method. (NONE, BASIC)</td>
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
    <td><a href="#describe_launch_configuration_templates"><CopyableCode code="describe_launch_configuration_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all Launch Configuration Templates, filtered by Launch Configuration Template IDs</td>
</tr>
<tr>
    <td><a href="#create_launch_configuration_template"><CopyableCode code="create_launch_configuration_template" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new Launch Configuration Template.</td>
</tr>
<tr>
    <td><a href="#update_launch_configuration_template"><CopyableCode code="update_launch_configuration_template" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-launchConfigurationTemplateID"><code>launchConfigurationTemplateID</code></a></td>
    <td></td>
    <td>Updates an existing Launch Configuration Template by ID.</td>
</tr>
<tr>
    <td><a href="#delete_launch_configuration_template"><CopyableCode code="delete_launch_configuration_template" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a single Launch Configuration Template by ID.</td>
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
    defaultValue="describe_launch_configuration_templates"
    values={[
        { label: 'describe_launch_configuration_templates', value: 'describe_launch_configuration_templates' }
    ]}
>
<TabItem value="describe_launch_configuration_templates">

Lists all Launch Configuration Templates, filtered by Launch Configuration Template IDs

```sql
SELECT
arn,
associate_public_ip_address,
boot_mode,
copy_private_ip,
copy_tags,
ec_2_launch_template_id,
enable_map_auto_tagging,
enable_parameters_encryption,
large_volume_conf,
launch_configuration_template_id,
launch_disposition,
licensing,
map_auto_tagging_mpe_id,
parameters_encryption_key,
post_launch_actions,
small_volume_conf,
small_volume_max_size,
tags,
target_instance_type_right_sizing_method
FROM aws.mgn.launch_configuration_templates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_launch_configuration_template"
    values={[
        { label: 'create_launch_configuration_template', value: 'create_launch_configuration_template' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_launch_configuration_template">

Creates a new Launch Configuration Template.

```sql
INSERT INTO aws.mgn.launch_configuration_templates (
postLaunchActions,
enableMapAutoTagging,
mapAutoTaggingMpeID,
tags,
launchDisposition,
targetInstanceTypeRightSizingMethod,
copyPrivateIp,
associatePublicIpAddress,
copyTags,
licensing,
bootMode,
smallVolumeMaxSize,
smallVolumeConf,
largeVolumeConf,
enableParametersEncryption,
parametersEncryptionKey,
region
)
SELECT 
'{{ postLaunchActions }}',
{{ enableMapAutoTagging }},
'{{ mapAutoTaggingMpeID }}',
'{{ tags }}',
'{{ launchDisposition }}',
'{{ targetInstanceTypeRightSizingMethod }}',
{{ copyPrivateIp }},
{{ associatePublicIpAddress }},
{{ copyTags }},
'{{ licensing }}',
'{{ bootMode }}',
{{ smallVolumeMaxSize }},
'{{ smallVolumeConf }}',
'{{ largeVolumeConf }}',
{{ enableParametersEncryption }},
'{{ parametersEncryptionKey }}',
'{{ region }}'
RETURNING
arn,
associate_public_ip_address,
boot_mode,
copy_private_ip,
copy_tags,
ec_2_launch_template_id,
enable_map_auto_tagging,
enable_parameters_encryption,
large_volume_conf,
launch_configuration_template_id,
launch_disposition,
licensing,
map_auto_tagging_mpe_id,
parameters_encryption_key,
post_launch_actions,
small_volume_conf,
small_volume_max_size,
tags,
target_instance_type_right_sizing_method
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: launch_configuration_templates
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the launch_configuration_templates resource.
    - name: postLaunchActions
      description: |
        Post Launch Actions to executed on the Test or Cutover instance.
      value:
        deployment: "{{ deployment }}"
        s3LogBucket: "{{ s3LogBucket }}"
        s3OutputKeyPrefix: "{{ s3OutputKeyPrefix }}"
        cloudWatchLogGroupName: "{{ cloudWatchLogGroupName }}"
        ssmDocuments:
          - actionName: "{{ actionName }}"
            ssmDocumentName: "{{ ssmDocumentName }}"
            timeoutSeconds: {{ timeoutSeconds }}
            mustSucceedForCutover: {{ mustSucceedForCutover }}
            parameters: "{{ parameters }}"
            externalParameters: "{{ externalParameters }}"
    - name: enableMapAutoTagging
      value: {{ enableMapAutoTagging }}
    - name: mapAutoTaggingMpeID
      value: "{{ mapAutoTaggingMpeID }}"
    - name: tags
      value: "{{ tags }}"
    - name: launchDisposition
      value: "{{ launchDisposition }}"
      valid_values: ['STOPPED', 'STARTED']
    - name: targetInstanceTypeRightSizingMethod
      value: "{{ targetInstanceTypeRightSizingMethod }}"
      valid_values: ['NONE', 'BASIC']
    - name: copyPrivateIp
      value: {{ copyPrivateIp }}
    - name: associatePublicIpAddress
      value: {{ associatePublicIpAddress }}
    - name: copyTags
      value: {{ copyTags }}
    - name: licensing
      description: |
        Configure Licensing.
      value:
        osByol: {{ osByol }}
    - name: bootMode
      value: "{{ bootMode }}"
      valid_values: ['LEGACY_BIOS', 'UEFI', 'USE_SOURCE']
    - name: smallVolumeMaxSize
      value: {{ smallVolumeMaxSize }}
    - name: smallVolumeConf
      description: |
        Launch template disk configuration.
      value:
        volumeType: "{{ volumeType }}"
        iops: {{ iops }}
        throughput: {{ throughput }}
    - name: largeVolumeConf
      description: |
        Launch template disk configuration.
      value:
        volumeType: "{{ volumeType }}"
        iops: {{ iops }}
        throughput: {{ throughput }}
    - name: enableParametersEncryption
      value: {{ enableParametersEncryption }}
    - name: parametersEncryptionKey
      value: "{{ parametersEncryptionKey }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_launch_configuration_template"
    values={[
        { label: 'update_launch_configuration_template', value: 'update_launch_configuration_template' }
    ]}
>
<TabItem value="update_launch_configuration_template">

Updates an existing Launch Configuration Template by ID.

```sql
UPDATE aws.mgn.launch_configuration_templates
SET 
launchConfigurationTemplateID = '{{ launchConfigurationTemplateID }}',
postLaunchActions = '{{ postLaunchActions }}',
enableMapAutoTagging = {{ enableMapAutoTagging }},
mapAutoTaggingMpeID = '{{ mapAutoTaggingMpeID }}',
launchDisposition = '{{ launchDisposition }}',
targetInstanceTypeRightSizingMethod = '{{ targetInstanceTypeRightSizingMethod }}',
copyPrivateIp = {{ copyPrivateIp }},
associatePublicIpAddress = {{ associatePublicIpAddress }},
copyTags = {{ copyTags }},
licensing = '{{ licensing }}',
bootMode = '{{ bootMode }}',
smallVolumeMaxSize = {{ smallVolumeMaxSize }},
smallVolumeConf = '{{ smallVolumeConf }}',
largeVolumeConf = '{{ largeVolumeConf }}',
enableParametersEncryption = {{ enableParametersEncryption }},
parametersEncryptionKey = '{{ parametersEncryptionKey }}'
WHERE 
region = '{{ region }}' --required
AND launchConfigurationTemplateID = '{{ launchConfigurationTemplateID }}' --required
RETURNING
arn,
associate_public_ip_address,
boot_mode,
copy_private_ip,
copy_tags,
ec_2_launch_template_id,
enable_map_auto_tagging,
enable_parameters_encryption,
large_volume_conf,
launch_configuration_template_id,
launch_disposition,
licensing,
map_auto_tagging_mpe_id,
parameters_encryption_key,
post_launch_actions,
small_volume_conf,
small_volume_max_size,
tags,
target_instance_type_right_sizing_method;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_launch_configuration_template"
    values={[
        { label: 'delete_launch_configuration_template', value: 'delete_launch_configuration_template' }
    ]}
>
<TabItem value="delete_launch_configuration_template">

Deletes a single Launch Configuration Template by ID.

```sql
DELETE FROM aws.mgn.launch_configuration_templates
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
