--- 
title: component_version_artifacts
hide_title: false
hide_table_of_contents: false
keywords:
  - component_version_artifacts
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

Creates, updates, deletes, gets or lists a <code>component_version_artifacts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="component_version_artifacts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.greengrassv2.component_version_artifacts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_component_version_artifact"
    values={[
        { label: 'get_component_version_artifact', value: 'get_component_version_artifact' }
    ]}
>
<TabItem value="get_component_version_artifact">

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
    <td><CopyableCode code="preSignedUrl" /></td>
    <td><code>string</code></td>
    <td>The URL of the artifact.</td>
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
    <td><a href="#get_component_version_artifact"><CopyableCode code="get_component_version_artifact" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-artifact_name"><code>artifact_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-s3EndpointType"><code>s3EndpointType</code></a>, <a href="#parameter-x-amz-iot-endpoint-type"><code>x-amz-iot-endpoint-type</code></a></td>
    <td>Gets the pre-signed URL to download a public or a Lambda component artifact. Core devices call this operation to identify the URL that they can use to download an artifact to install.</td>
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
    <td>The ARN of the component version. Specify the ARN of a public or a Lambda component version.</td>
</tr>
<tr id="parameter-artifact_name">
    <td><CopyableCode code="artifact_name" /></td>
    <td><code>string</code></td>
    <td>The name of the artifact. You can use the GetComponent operation to download the component recipe, which includes the URI of the artifact. The artifact name is the section of the URI after the scheme. For example, in the artifact URI greengrass:SomeArtifact.zip, the artifact name is SomeArtifact.zip.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-s3EndpointType">
    <td><CopyableCode code="s3EndpointType" /></td>
    <td><code>string</code></td>
    <td>Specifies the endpoint to use when getting Amazon S3 pre-signed URLs. All Amazon Web Services Regions except US East (N. Virginia) use REGIONAL in all cases. In the US East (N. Virginia) Region the default is GLOBAL, but you can change it to REGIONAL with this parameter.</td>
</tr>
<tr id="parameter-x-amz-iot-endpoint-type">
    <td><CopyableCode code="x-amz-iot-endpoint-type" /></td>
    <td><code>string</code></td>
    <td>Determines if the Amazon S3 URL returned is a FIPS pre-signed URL endpoint. Specify fips if you want the returned Amazon S3 pre-signed URL to point to an Amazon S3 FIPS endpoint. If you don't specify a value, the default is standard.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_component_version_artifact"
    values={[
        { label: 'get_component_version_artifact', value: 'get_component_version_artifact' }
    ]}
>
<TabItem value="get_component_version_artifact">

Gets the pre-signed URL to download a public or a Lambda component artifact. Core devices call this operation to identify the URL that they can use to download an artifact to install.

```sql
SELECT
preSignedUrl
FROM aws.greengrassv2.component_version_artifacts
WHERE arn = '{{ arn }}' -- required
AND artifact_name = '{{ artifact_name }}' -- required
AND region = '{{ region }}' -- required
AND s3EndpointType = '{{ s3EndpointType }}'
AND `x-amz-iot-endpoint-type` = '{{ x-amz-iot-endpoint-type }}'
;
```
</TabItem>
</Tabs>
