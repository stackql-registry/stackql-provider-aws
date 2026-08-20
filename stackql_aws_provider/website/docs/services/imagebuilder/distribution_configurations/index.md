--- 
title: distribution_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - distribution_configurations
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

Creates, updates, deletes, gets or lists a <code>distribution_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="distribution_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.imagebuilder.distribution_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_distribution_configuration"
    values={[
        { label: 'get_distribution_configuration', value: 'get_distribution_configuration' },
        { label: 'list_distribution_configurations', value: 'list_distribution_configurations' }
    ]}
>
<TabItem value="get_distribution_configuration">

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
    <td><CopyableCode code="distribution_configuration" /></td>
    <td><code>object</code></td>
    <td>The distribution configuration object.</td>
</tr>
<tr>
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The request ID that uniquely identifies this request.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_distribution_configurations">

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
    <td>The name of the distribution configuration. (pattern: &lt;code&gt;^&#91;-_A-Za-z-0-9&#93;&#91;-_A-Za-z0-9 &#93;&#123;1,126&#125;&#91;-_A-Za-z-0-9&#93;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the distribution configuration. (pattern: &lt;code&gt;^arn:aws&#91;^:&#93;*:imagebuilder:&#91;^:&#93;+:(?:&#91;0-9&#93;&#123;12&#125;|aws(?:-&#91;a-z-&#93;+)?):(?:image-recipe|container-recipe|infrastructure-configuration|distribution-configuration|component|image|image-pipeline|lifecycle-policy|workflow\/(?:build|test|distribution))/&#91;a-z0-9-_&#93;+(?:/(?:(?:x|&#91;0-9&#93;+)\.(?:x|&#91;0-9&#93;+)\.(?:x|&#91;0-9&#93;+))(?:/&#91;0-9&#93;+)?)?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="date_created" /></td>
    <td><code>string</code></td>
    <td>The date on which the distribution configuration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="date_updated" /></td>
    <td><code>string</code></td>
    <td>The date on which the distribution configuration was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the distribution configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="regions" /></td>
    <td><code>array</code></td>
    <td>A list of Regions where the container image is distributed to.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags associated with the distribution configuration.</td>
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
    <td><a href="#get_distribution_configuration"><CopyableCode code="get_distribution_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-distributionConfigurationArn"><code>distributionConfigurationArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a distribution configuration.</td>
</tr>
<tr>
    <td><a href="#list_distribution_configurations"><CopyableCode code="list_distribution_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of distribution configurations.</td>
</tr>
<tr>
    <td><a href="#create_distribution_configuration"><CopyableCode code="create_distribution_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-distributions"><code>distributions</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td></td>
    <td>Creates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline.</td>
</tr>
<tr>
    <td><a href="#update_distribution_configuration"><CopyableCode code="update_distribution_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-distributionConfigurationArn"><code>distributionConfigurationArn</code></a>, <a href="#parameter-distributions"><code>distributions</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td></td>
    <td>Updates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline.</td>
</tr>
<tr>
    <td><a href="#delete_distribution_configuration"><CopyableCode code="delete_distribution_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-distributionConfigurationArn"><code>distributionConfigurationArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a distribution configuration.</td>
</tr>
<tr>
    <td><a href="#distribute_image"><CopyableCode code="distribute_image" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sourceImage"><code>sourceImage</code></a>, <a href="#parameter-distributionConfigurationArn"><code>distributionConfigurationArn</code></a>, <a href="#parameter-executionRole"><code>executionRole</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td></td>
    <td>Distributes an existing AMI to target Regions and accounts without running the full image build process. This operation only runs the distribution phase on an image that has already been built.</td>
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
<tr id="parameter-distributionConfigurationArn">
    <td><CopyableCode code="distributionConfigurationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the distribution configuration to delete.</td>
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
    defaultValue="get_distribution_configuration"
    values={[
        { label: 'get_distribution_configuration', value: 'get_distribution_configuration' },
        { label: 'list_distribution_configurations', value: 'list_distribution_configurations' }
    ]}
>
<TabItem value="get_distribution_configuration">

Gets a distribution configuration.

```sql
SELECT
distribution_configuration,
request_id
FROM aws.imagebuilder.distribution_configurations
WHERE distributionConfigurationArn = '{{ distributionConfigurationArn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_distribution_configurations">

Returns a list of distribution configurations.

```sql
SELECT
name,
arn,
date_created,
date_updated,
description,
regions,
tags
FROM aws.imagebuilder.distribution_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_distribution_configuration"
    values={[
        { label: 'create_distribution_configuration', value: 'create_distribution_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_distribution_configuration">

Creates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline.

```sql
INSERT INTO aws.imagebuilder.distribution_configurations (
name,
description,
distributions,
tags,
clientToken,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ distributions }}' /* required */,
'{{ tags }}',
'{{ clientToken }}' /* required */,
'{{ region }}'
RETURNING
client_token,
distribution_configuration_arn,
request_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: distribution_configurations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the distribution_configurations resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: distributions
      value:
        - region: "{{ region }}"
          amiDistributionConfiguration:
            name: "{{ name }}"
            description: "{{ description }}"
            targetAccountIds:
              - "{{ targetAccountIds }}"
            amiTags: "{{ amiTags }}"
            kmsKeyId: "{{ kmsKeyId }}"
            launchPermission:
              userIds:
                - "{{ userIds }}"
              userGroups:
                - "{{ userGroups }}"
              organizationArns:
                - "{{ organizationArns }}"
              organizationalUnitArns:
                - "{{ organizationalUnitArns }}"
          containerDistributionConfiguration:
            description: "{{ description }}"
            containerTags:
              - "{{ containerTags }}"
            targetRepository:
              service: "{{ service }}"
              repositoryName: "{{ repositoryName }}"
          licenseConfigurationArns: "{{ licenseConfigurationArns }}"
          launchTemplateConfigurations: "{{ launchTemplateConfigurations }}"
          s3ExportConfiguration:
            roleName: "{{ roleName }}"
            diskImageFormat: "{{ diskImageFormat }}"
            s3Bucket: "{{ s3Bucket }}"
            s3Prefix: "{{ s3Prefix }}"
          fastLaunchConfigurations: "{{ fastLaunchConfigurations }}"
          ssmParameterConfigurations: "{{ ssmParameterConfigurations }}"
    - name: tags
      value: "{{ tags }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_distribution_configuration"
    values={[
        { label: 'update_distribution_configuration', value: 'update_distribution_configuration' }
    ]}
>
<TabItem value="update_distribution_configuration">

Updates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline.

```sql
UPDATE aws.imagebuilder.distribution_configurations
SET 
distributionConfigurationArn = '{{ distributionConfigurationArn }}',
description = '{{ description }}',
distributions = '{{ distributions }}',
clientToken = '{{ clientToken }}'
WHERE 
region = '{{ region }}' --required
AND distributionConfigurationArn = '{{ distributionConfigurationArn }}' --required
AND distributions = '{{ distributions }}' --required
AND clientToken = '{{ clientToken }}' --required
RETURNING
client_token,
distribution_configuration_arn,
request_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_distribution_configuration"
    values={[
        { label: 'delete_distribution_configuration', value: 'delete_distribution_configuration' }
    ]}
>
<TabItem value="delete_distribution_configuration">

Deletes a distribution configuration.

```sql
DELETE FROM aws.imagebuilder.distribution_configurations
WHERE distributionConfigurationArn = '{{ distributionConfigurationArn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="distribute_image"
    values={[
        { label: 'distribute_image', value: 'distribute_image' }
    ]}
>
<TabItem value="distribute_image">

Distributes an existing AMI to target Regions and accounts without running the full image build process. This operation only runs the distribution phase on an image that has already been built.

```sql
EXEC aws.imagebuilder.distribution_configurations.distribute_image 
@region='{{ region }}' --required 
@@json=
'{
"sourceImage": "{{ sourceImage }}", 
"distributionConfigurationArn": "{{ distributionConfigurationArn }}", 
"executionRole": "{{ executionRole }}", 
"tags": "{{ tags }}", 
"clientToken": "{{ clientToken }}", 
"loggingConfiguration": "{{ loggingConfiguration }}"
}'
;
```
</TabItem>
</Tabs>
