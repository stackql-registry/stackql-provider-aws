--- 
title: component_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - component_versions
  - greengrassv2
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

Creates, updates, deletes, gets or lists a <code>component_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="component_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.greengrassv2.component_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_component_versions"
    values={[
        { label: 'list_component_versions', value: 'list_component_versions' }
    ]}
>
<TabItem value="list_component_versions">

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
    <td>The ARN of the component version.</td>
</tr>
<tr>
    <td><CopyableCode code="componentName" /></td>
    <td><code>string</code></td>
    <td>The name of the component.</td>
</tr>
<tr>
    <td><CopyableCode code="componentVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the component.</td>
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
    <td><a href="#list_component_versions"><CopyableCode code="list_component_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieves a paginated list of all versions for a component. Greater versions are listed first.</td>
</tr>
<tr>
    <td><a href="#create_component_version"><CopyableCode code="create_component_version" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a component. Components are software that run on Greengrass core devices. After you develop and test a component on your core device, you can use this operation to upload your component to IoT Greengrass. Then, you can deploy the component to other core devices. You can use this operation to do the following: Create components from recipes Create a component from a recipe, which is a file that defines the component's metadata, parameters, dependencies, lifecycle, artifacts, and platform capability. For more information, see IoT Greengrass component recipe reference in the IoT Greengrass V2 Developer Guide. To create a component from a recipe, specify inlineRecipe when you call this operation. Create components from Lambda functions Create a component from an Lambda function that runs on IoT Greengrass. This creates a recipe and artifacts from the Lambda function's deployment package. You can use this operation to migrate Lambda functions from IoT Greengrass V1 to IoT Greengrass V2. This function accepts Lambda functions in all supported versions of Python, Node.js, and Java runtimes. IoT Greengrass doesn't apply any additional restrictions on deprecated Lambda runtime versions. To create a component from a Lambda function, specify lambdaFunction when you call this operation. IoT Greengrass currently supports Lambda functions on only Linux core devices.</td>
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
<tr id="parameter-arn">
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the component.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned per paginated request.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to be used for the next set of paginated results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_component_versions"
    values={[
        { label: 'list_component_versions', value: 'list_component_versions' }
    ]}
>
<TabItem value="list_component_versions">

Retrieves a paginated list of all versions for a component. Greater versions are listed first.

```sql
SELECT
arn,
componentName,
componentVersion
FROM aws.greengrassv2.component_versions
WHERE arn = '{{ arn }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_component_version"
    values={[
        { label: 'create_component_version', value: 'create_component_version' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_component_version">

Creates a component. Components are software that run on Greengrass core devices. After you develop and test a component on your core device, you can use this operation to upload your component to IoT Greengrass. Then, you can deploy the component to other core devices. You can use this operation to do the following: Create components from recipes Create a component from a recipe, which is a file that defines the component's metadata, parameters, dependencies, lifecycle, artifacts, and platform capability. For more information, see IoT Greengrass component recipe reference in the IoT Greengrass V2 Developer Guide. To create a component from a recipe, specify inlineRecipe when you call this operation. Create components from Lambda functions Create a component from an Lambda function that runs on IoT Greengrass. This creates a recipe and artifacts from the Lambda function's deployment package. You can use this operation to migrate Lambda functions from IoT Greengrass V1 to IoT Greengrass V2. This function accepts Lambda functions in all supported versions of Python, Node.js, and Java runtimes. IoT Greengrass doesn't apply any additional restrictions on deprecated Lambda runtime versions. To create a component from a Lambda function, specify lambdaFunction when you call this operation. IoT Greengrass currently supports Lambda functions on only Linux core devices.

```sql
INSERT INTO aws.greengrassv2.component_versions (
inlineRecipe,
lambdaFunction,
tags,
clientToken,
region
)
SELECT 
'{{ inlineRecipe }}',
'{{ lambdaFunction }}',
'{{ tags }}',
'{{ clientToken }}',
'{{ region }}'
RETURNING
arn,
componentName,
componentVersion,
creationTimestamp,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: component_versions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the component_versions resource.
    - name: inlineRecipe
      value: "{{ inlineRecipe }}"
    - name: lambdaFunction
      description: |
        Contains information about an Lambda function to import to create a component.
      value:
        lambdaArn: "{{ lambdaArn }}"
        componentName: "{{ componentName }}"
        componentVersion: "{{ componentVersion }}"
        componentPlatforms:
          - name: "{{ name }}"
            attributes: "{{ attributes }}"
        componentDependencies: "{{ componentDependencies }}"
        componentLambdaParameters:
          eventSources:
            - topic: "{{ topic }}"
              type_: "{{ type_ }}"
          maxQueueSize: {{ maxQueueSize }}
          maxInstancesCount: {{ maxInstancesCount }}
          maxIdleTimeInSeconds: {{ maxIdleTimeInSeconds }}
          timeoutInSeconds: {{ timeoutInSeconds }}
          statusTimeoutInSeconds: {{ statusTimeoutInSeconds }}
          pinned: {{ pinned }}
          inputPayloadEncodingType: "{{ inputPayloadEncodingType }}"
          execArgs:
            - "{{ execArgs }}"
          environmentVariables: "{{ environmentVariables }}"
          linuxProcessParams:
            isolationMode: "{{ isolationMode }}"
            containerParams:
              memorySizeInKB: {{ memorySizeInKB }}
              mountROSysfs: {{ mountROSysfs }}
              volumes:
                - sourcePath: "{{ sourcePath }}"
                  destinationPath: "{{ destinationPath }}"
                  permission: "{{ permission }}"
                  addGroupOwner: {{ addGroupOwner }}
              devices:
                - path: "{{ path }}"
                  permission: "{{ permission }}"
                  addGroupOwner: {{ addGroupOwner }}
    - name: tags
      value: "{{ tags }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>
