--- 
title: publishers
hide_title: false
hide_table_of_contents: false
keywords:
  - publishers
  - cloudformation
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

Creates, updates, deletes, gets or lists a <code>publishers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="publishers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudformation.publishers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_publisher"
    values={[
        { label: 'describe_publisher', value: 'describe_publisher' }
    ]}
>
<TabItem value="describe_publisher">

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
    <td><CopyableCode code="line_items" /></td>
    <td><code>array</code></td>
    <td></td>
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
    <td><a href="#describe_publisher"><CopyableCode code="describe_publisher" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-PublisherId"><code>PublisherId</code></a></td>
    <td>Returns information about a CloudFormation extension publisher. If you don't supply a PublisherId, and you have registered as an extension publisher, DescribePublisher returns information about your own publisher account. For more information about registering as a publisher, see: RegisterPublisher Publishing extensions to make them available for public use in the CloudFormation Command Line Interface (CLI) User Guide</td>
</tr>
<tr>
    <td><a href="#register_publisher"><CopyableCode code="register_publisher" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AcceptTermsAndConditions"><code>AcceptTermsAndConditions</code></a>, <a href="#parameter-ConnectionArn"><code>ConnectionArn</code></a></td>
    <td>Registers your account as a publisher of public extensions in the CloudFormation registry. Public extensions are available for use by all CloudFormation users. This publisher ID applies to your account in all Amazon Web Services Regions. For information about requirements for registering as a public extension publisher, see Prerequisite: Registering your account to publish CloudFormation extensions in the CloudFormation Command Line Interface (CLI) User Guide.</td>
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
<tr id="parameter-AcceptTermsAndConditions">
    <td><CopyableCode code="AcceptTermsAndConditions" /></td>
    <td><code>boolean</code></td>
    <td>Whether you accept the Terms and Conditions for publishing extensions in the CloudFormation registry. You must accept the terms and conditions in order to register to publish public extensions to the CloudFormation registry. The default is false.</td>
</tr>
<tr id="parameter-ConnectionArn">
    <td><CopyableCode code="ConnectionArn" /></td>
    <td><code>string</code></td>
    <td>If you are using a Bitbucket or GitHub account for identity verification, the Amazon Resource Name (ARN) for your connection to that account. For more information, see Prerequisite: Registering your account to publish CloudFormation extensions in the CloudFormation Command Line Interface (CLI) User Guide.</td>
</tr>
<tr id="parameter-PublisherId">
    <td><CopyableCode code="PublisherId" /></td>
    <td><code>string</code></td>
    <td>The ID of the extension publisher. If you don't supply a PublisherId, and you have registered as an extension publisher, DescribePublisher returns information about your own publisher account.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_publisher"
    values={[
        { label: 'describe_publisher', value: 'describe_publisher' }
    ]}
>
<TabItem value="describe_publisher">

Returns information about a CloudFormation extension publisher. If you don't supply a PublisherId, and you have registered as an extension publisher, DescribePublisher returns information about your own publisher account. For more information about registering as a publisher, see: RegisterPublisher Publishing extensions to make them available for public use in the CloudFormation Command Line Interface (CLI) User Guide

```sql
SELECT
line_items
FROM aws.cloudformation.publishers
WHERE region = '{{ region }}' -- required
AND PublisherId = '{{ PublisherId }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_publisher"
    values={[
        { label: 'register_publisher', value: 'register_publisher' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_publisher">

Registers your account as a publisher of public extensions in the CloudFormation registry. Public extensions are available for use by all CloudFormation users. This publisher ID applies to your account in all Amazon Web Services Regions. For information about requirements for registering as a public extension publisher, see Prerequisite: Registering your account to publish CloudFormation extensions in the CloudFormation Command Line Interface (CLI) User Guide.

```sql
INSERT INTO aws.cloudformation.publishers (
region,
AcceptTermsAndConditions,
ConnectionArn
)
SELECT 
'{{ region }}',
'{{ AcceptTermsAndConditions }}',
'{{ ConnectionArn }}'
RETURNING
line_items
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: publishers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the publishers resource.
    - name: AcceptTermsAndConditions
      value: {{ AcceptTermsAndConditions }}
      description: Whether you accept the Terms and Conditions for publishing extensions in the CloudFormation registry. You must accept the terms and conditions in order to register to publish public extensions to the CloudFormation registry. The default is false.
      description: Whether you accept the Terms and Conditions for publishing extensions in the CloudFormation registry. You must accept the terms and conditions in order to register to publish public extensions to the CloudFormation registry. The default is false.
    - name: ConnectionArn
      value: "{{ ConnectionArn }}"
      description: If you are using a Bitbucket or GitHub account for identity verification, the Amazon Resource Name (ARN) for your connection to that account. For more information, see Prerequisite: Registering your account to publish CloudFormation extensions in the CloudFormation Command Line Interface (CLI) User Guide.
      description: If you are using a Bitbucket or GitHub account for identity verification, the Amazon Resource Name (ARN) for your connection to that account. For more information, see Prerequisite: Registering your account to publish CloudFormation extensions in the CloudFormation Command Line Interface (CLI) User Guide.
`}</CodeBlock>

</TabItem>
</Tabs>
