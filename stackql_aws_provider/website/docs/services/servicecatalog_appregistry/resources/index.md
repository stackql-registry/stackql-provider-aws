--- 
title: resources
hide_title: false
hide_table_of_contents: false
keywords:
  - resources
  - servicecatalog_appregistry
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

Creates, updates, deletes, gets or lists a <code>resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.servicecatalog_appregistry.resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#associate_resource"><CopyableCode code="associate_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-application"><code>application</code></a>, <a href="#parameter-resource_type"><code>resource_type</code></a>, <a href="#parameter-resource"><code>resource</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Associates a resource with an application. The resource can be specified by its ARN or name. The application can be specified by ARN, ID, or name. Minimum permissions You must have the following permissions to associate a resource using the OPTIONS parameter set to APPLY_APPLICATION_TAG. tag:GetResources tag:TagResources You must also have these additional permissions if you don't use the AWSServiceCatalogAppRegistryFullAccess policy. For more information, see AWSServiceCatalogAppRegistryFullAccess in the AppRegistry Administrator Guide. resource-groups:AssociateResource cloudformation:UpdateStack cloudformation:DescribeStacks In addition, you must have the tagging permission defined by the Amazon Web Services service that creates the resource. For more information, see TagResources in the Resource Groups Tagging API Reference.</td>
</tr>
<tr>
    <td><a href="#disassociate_resource"><CopyableCode code="disassociate_resource" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-application"><code>application</code></a>, <a href="#parameter-resource_type"><code>resource_type</code></a>, <a href="#parameter-resource"><code>resource</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates a resource from application. Both the resource and the application can be specified either by ID or name. Minimum permissions You must have the following permissions to remove a resource that's been associated with an application using the APPLY_APPLICATION_TAG option for AssociateResource. tag:GetResources tag:UntagResources You must also have the following permissions if you don't use the AWSServiceCatalogAppRegistryFullAccess policy. For more information, see AWSServiceCatalogAppRegistryFullAccess in the AppRegistry Administrator Guide. resource-groups:DisassociateResource cloudformation:UpdateStack cloudformation:DescribeStacks In addition, you must have the tagging permission defined by the Amazon Web Services service that creates the resource. For more information, see UntagResources in the Resource Groups Tagging API Reference.</td>
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
<tr id="parameter-application">
    <td><CopyableCode code="application" /></td>
    <td><code>string</code></td>
    <td>The name or ID of the application.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-resource">
    <td><CopyableCode code="resource" /></td>
    <td><code>string</code></td>
    <td>The name or ID of the resource.</td>
</tr>
<tr id="parameter-resource_type">
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource that is being disassociated.</td>
</tr>
</tbody>
</table>

## `UPDATE` examples

<Tabs
    defaultValue="associate_resource"
    values={[
        { label: 'associate_resource', value: 'associate_resource' }
    ]}
>
<TabItem value="associate_resource">

Associates a resource with an application. The resource can be specified by its ARN or name. The application can be specified by ARN, ID, or name. Minimum permissions You must have the following permissions to associate a resource using the OPTIONS parameter set to APPLY_APPLICATION_TAG. tag:GetResources tag:TagResources You must also have these additional permissions if you don't use the AWSServiceCatalogAppRegistryFullAccess policy. For more information, see AWSServiceCatalogAppRegistryFullAccess in the AppRegistry Administrator Guide. resource-groups:AssociateResource cloudformation:UpdateStack cloudformation:DescribeStacks In addition, you must have the tagging permission defined by the Amazon Web Services service that creates the resource. For more information, see TagResources in the Resource Groups Tagging API Reference.

```sql
UPDATE aws.servicecatalog_appregistry.resources
SET 
options = '{{ options }}'
WHERE 
application = '{{ application }}' --required
AND resource_type = '{{ resource_type }}' --required
AND resource = '{{ resource }}' --required
AND region = '{{ region }}' --required
RETURNING
application_arn,
options,
resource_arn;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_resource"
    values={[
        { label: 'disassociate_resource', value: 'disassociate_resource' }
    ]}
>
<TabItem value="disassociate_resource">

Disassociates a resource from application. Both the resource and the application can be specified either by ID or name. Minimum permissions You must have the following permissions to remove a resource that's been associated with an application using the APPLY_APPLICATION_TAG option for AssociateResource. tag:GetResources tag:UntagResources You must also have the following permissions if you don't use the AWSServiceCatalogAppRegistryFullAccess policy. For more information, see AWSServiceCatalogAppRegistryFullAccess in the AppRegistry Administrator Guide. resource-groups:DisassociateResource cloudformation:UpdateStack cloudformation:DescribeStacks In addition, you must have the tagging permission defined by the Amazon Web Services service that creates the resource. For more information, see UntagResources in the Resource Groups Tagging API Reference.

```sql
EXEC aws.servicecatalog_appregistry.resources.disassociate_resource 
@application='{{ application }}' --required, 
@resource_type='{{ resource_type }}' --required, 
@resource='{{ resource }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
