--- 
title: infrastructure_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - infrastructure_configurations
  - imagebuilder
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

Creates, updates, deletes, gets or lists an <code>infrastructure_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="infrastructure_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.imagebuilder.infrastructure_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_infrastructure_configuration"
    values={[
        { label: 'get_infrastructure_configuration', value: 'get_infrastructure_configuration' },
        { label: 'list_infrastructure_configurations', value: 'list_infrastructure_configurations' }
    ]}
>
<TabItem value="get_infrastructure_configuration">

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
    <td><CopyableCode code="infrastructure_configuration" /></td>
    <td><code>object</code></td>
    <td>The infrastructure configuration object.</td>
</tr>
<tr>
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The request ID that uniquely identifies this request.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_infrastructure_configurations">

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
    <td>The name of the infrastructure configuration. (pattern: &lt;code&gt;^&#91;-_A-Za-z-0-9&#93;&#91;-_A-Za-z0-9 &#93;&#123;1,126&#125;&#91;-_A-Za-z-0-9&#93;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the infrastructure configuration. (pattern: &lt;code&gt;^arn:aws&#91;^:&#93;*:imagebuilder:&#91;^:&#93;+:(?:&#91;0-9&#93;&#123;12&#125;|aws(?:-&#91;a-z-&#93;+)?):(?:image-recipe|container-recipe|infrastructure-configuration|distribution-configuration|component|image|image-pipeline|lifecycle-policy|workflow\/(?:build|test|distribution))/&#91;a-z0-9-_&#93;+(?:/(?:(?:x|&#91;0-9&#93;+)\.(?:x|&#91;0-9&#93;+)\.(?:x|&#91;0-9&#93;+))(?:/&#91;0-9&#93;+)?)?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="date_created" /></td>
    <td><code>string</code></td>
    <td>The date on which the infrastructure configuration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="date_updated" /></td>
    <td><code>string</code></td>
    <td>The date on which the infrastructure configuration was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the infrastructure configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_profile_name" /></td>
    <td><code>string</code></td>
    <td>The instance profile of the infrastructure configuration. (pattern: &lt;code&gt;^&#91;\w+=,.@-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="instance_types" /></td>
    <td><code>array</code></td>
    <td>The instance types of the infrastructure configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="placement" /></td>
    <td><code>object</code></td>
    <td>By default, EC2 instances run on shared tenancy hardware. This means that multiple Amazon Web Services accounts might share the same physical hardware. When you use dedicated hardware, the physical server that hosts your instances is dedicated to your Amazon Web Services account. Instance placement settings contain the details for the physical hardware where instances that Image Builder launches during image creation will run.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_tags" /></td>
    <td><code>object</code></td>
    <td>The tags attached to the image created by Image Builder.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags of the infrastructure configuration.</td>
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
    <td><a href="#get_infrastructure_configuration"><CopyableCode code="get_infrastructure_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-infrastructureConfigurationArn"><code>infrastructureConfigurationArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets an infrastructure configuration.</td>
</tr>
<tr>
    <td><a href="#list_infrastructure_configurations"><CopyableCode code="list_infrastructure_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of infrastructure configurations.</td>
</tr>
<tr>
    <td><a href="#create_infrastructure_configuration"><CopyableCode code="create_infrastructure_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-instanceProfileName"><code>instanceProfileName</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td></td>
    <td>Creates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested.</td>
</tr>
<tr>
    <td><a href="#update_infrastructure_configuration"><CopyableCode code="update_infrastructure_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-infrastructureConfigurationArn"><code>infrastructureConfigurationArn</code></a>, <a href="#parameter-instanceProfileName"><code>instanceProfileName</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td></td>
    <td>Updates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested.</td>
</tr>
<tr>
    <td><a href="#delete_infrastructure_configuration"><CopyableCode code="delete_infrastructure_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-infrastructureConfigurationArn"><code>infrastructureConfigurationArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an infrastructure configuration.</td>
</tr>
<tr>
    <td><a href="#import_disk_image"><CopyableCode code="import_disk_image" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-semanticVersion"><code>semanticVersion</code></a>, <a href="#parameter-platform"><code>platform</code></a>, <a href="#parameter-osVersion"><code>osVersion</code></a>, <a href="#parameter-infrastructureConfigurationArn"><code>infrastructureConfigurationArn</code></a>, <a href="#parameter-uri"><code>uri</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td></td>
    <td>Import a Windows operating system image from a verified Microsoft ISO disk file. The following disk images are supported: Windows 11 Enterprise</td>
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
<tr id="parameter-infrastructureConfigurationArn">
    <td><CopyableCode code="infrastructureConfigurationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the infrastructure configuration to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_infrastructure_configuration"
    values={[
        { label: 'get_infrastructure_configuration', value: 'get_infrastructure_configuration' },
        { label: 'list_infrastructure_configurations', value: 'list_infrastructure_configurations' }
    ]}
>
<TabItem value="get_infrastructure_configuration">

Gets an infrastructure configuration.

```sql
SELECT
infrastructure_configuration,
request_id
FROM aws.imagebuilder.infrastructure_configurations
WHERE infrastructureConfigurationArn = '{{ infrastructureConfigurationArn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_infrastructure_configurations">

Returns a list of infrastructure configurations.

```sql
SELECT
name,
arn,
date_created,
date_updated,
description,
instance_profile_name,
instance_types,
placement,
resource_tags,
tags
FROM aws.imagebuilder.infrastructure_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_infrastructure_configuration"
    values={[
        { label: 'create_infrastructure_configuration', value: 'create_infrastructure_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_infrastructure_configuration">

Creates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested.

```sql
INSERT INTO aws.imagebuilder.infrastructure_configurations (
name,
description,
instanceTypes,
instanceProfileName,
securityGroupIds,
subnetId,
logging,
keyPair,
terminateInstanceOnFailure,
snsTopicArn,
resourceTags,
instanceMetadataOptions,
tags,
placement,
clientToken,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ instanceTypes }}',
'{{ instanceProfileName }}' /* required */,
'{{ securityGroupIds }}',
'{{ subnetId }}',
'{{ logging }}',
'{{ keyPair }}',
{{ terminateInstanceOnFailure }},
'{{ snsTopicArn }}',
'{{ resourceTags }}',
'{{ instanceMetadataOptions }}',
'{{ tags }}',
'{{ placement }}',
'{{ clientToken }}' /* required */,
'{{ region }}'
RETURNING
client_token,
infrastructure_configuration_arn,
request_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: infrastructure_configurations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the infrastructure_configurations resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: instanceTypes
      value:
        - "{{ instanceTypes }}"
    - name: instanceProfileName
      value: "{{ instanceProfileName }}"
    - name: securityGroupIds
      value:
        - "{{ securityGroupIds }}"
    - name: subnetId
      value: "{{ subnetId }}"
    - name: logging
      description: |
        Logging configuration defines where Image Builder uploads your logs.
      value:
        s3Logs:
          s3BucketName: "{{ s3BucketName }}"
          s3KeyPrefix: "{{ s3KeyPrefix }}"
    - name: keyPair
      value: "{{ keyPair }}"
    - name: terminateInstanceOnFailure
      value: {{ terminateInstanceOnFailure }}
    - name: snsTopicArn
      value: "{{ snsTopicArn }}"
    - name: resourceTags
      value: "{{ resourceTags }}"
    - name: instanceMetadataOptions
      description: |
        The instance metadata options that apply to the HTTP requests that pipeline builds use to launch EC2 build and test instances. For more information about instance metadata options, see Configure the instance metadata options in the Amazon EC2 User Guide for Linux instances, or Configure the instance metadata options in the Amazon EC2 Windows Guide for Windows instances.
      value:
        httpTokens: "{{ httpTokens }}"
        httpPutResponseHopLimit: {{ httpPutResponseHopLimit }}
    - name: tags
      value: "{{ tags }}"
    - name: placement
      description: |
        By default, EC2 instances run on shared tenancy hardware. This means that multiple Amazon Web Services accounts might share the same physical hardware. When you use dedicated hardware, the physical server that hosts your instances is dedicated to your Amazon Web Services account. Instance placement settings contain the details for the physical hardware where instances that Image Builder launches during image creation will run.
      value:
        availabilityZone: "{{ availabilityZone }}"
        tenancy: "{{ tenancy }}"
        hostId: "{{ hostId }}"
        hostResourceGroupArn: "{{ hostResourceGroupArn }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_infrastructure_configuration"
    values={[
        { label: 'update_infrastructure_configuration', value: 'update_infrastructure_configuration' }
    ]}
>
<TabItem value="update_infrastructure_configuration">

Updates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested.

```sql
UPDATE aws.imagebuilder.infrastructure_configurations
SET 
infrastructureConfigurationArn = '{{ infrastructureConfigurationArn }}',
description = '{{ description }}',
instanceTypes = '{{ instanceTypes }}',
instanceProfileName = '{{ instanceProfileName }}',
securityGroupIds = '{{ securityGroupIds }}',
subnetId = '{{ subnetId }}',
logging = '{{ logging }}',
keyPair = '{{ keyPair }}',
terminateInstanceOnFailure = {{ terminateInstanceOnFailure }},
snsTopicArn = '{{ snsTopicArn }}',
resourceTags = '{{ resourceTags }}',
instanceMetadataOptions = '{{ instanceMetadataOptions }}',
placement = '{{ placement }}',
clientToken = '{{ clientToken }}'
WHERE 
region = '{{ region }}' --required
AND infrastructureConfigurationArn = '{{ infrastructureConfigurationArn }}' --required
AND instanceProfileName = '{{ instanceProfileName }}' --required
AND clientToken = '{{ clientToken }}' --required
RETURNING
client_token,
infrastructure_configuration_arn,
request_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_infrastructure_configuration"
    values={[
        { label: 'delete_infrastructure_configuration', value: 'delete_infrastructure_configuration' }
    ]}
>
<TabItem value="delete_infrastructure_configuration">

Deletes an infrastructure configuration.

```sql
DELETE FROM aws.imagebuilder.infrastructure_configurations
WHERE infrastructureConfigurationArn = '{{ infrastructureConfigurationArn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="import_disk_image"
    values={[
        { label: 'import_disk_image', value: 'import_disk_image' }
    ]}
>
<TabItem value="import_disk_image">

Import a Windows operating system image from a verified Microsoft ISO disk file. The following disk images are supported: Windows 11 Enterprise

```sql
EXEC aws.imagebuilder.infrastructure_configurations.import_disk_image 
@region='{{ region }}' --required 
@@json=
'{
"name": "{{ name }}", 
"semanticVersion": "{{ semanticVersion }}", 
"description": "{{ description }}", 
"platform": "{{ platform }}", 
"osVersion": "{{ osVersion }}", 
"executionRole": "{{ executionRole }}", 
"infrastructureConfigurationArn": "{{ infrastructureConfigurationArn }}", 
"uri": "{{ uri }}", 
"loggingConfiguration": "{{ loggingConfiguration }}", 
"tags": "{{ tags }}", 
"registerImageOptions": "{{ registerImageOptions }}", 
"windowsConfiguration": "{{ windowsConfiguration }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
</Tabs>
